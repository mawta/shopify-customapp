<?php

namespace App\Http\Controllers;

use App\Traits\CheckTraits;
use Illuminate\Http\Request;

class RecommendController extends Controller
{

    use CheckTraits;

    public function getCollections(Request $request)
    {
        $shopify = $this->shopify();
        $collections = $shopify->CustomCollection->get(['limit' => 250]);
        $collections1 = $shopify->SmartCollection->get(['limit' => 250]);

        $collections = array_merge($collections, $collections1);
        return response()->json([
            "collections" => $collections
        ]);
    }

    public function getProducts(Request $request)
    {
        $shopify = $this->shopify();
        $products = $shopify->Product->get(['limit' => 250]);

        return response()->json([
            "products" => $products
        ]);
    }


    public function saveProductRecommend(Request $request)
    {
        try {
            $shopify = $this->shopify();

            $productRuleType = $request->post("productRuleType");
            $productRecommendRuleType = $request->post("productRecommendRuleType");
            $tagValue = $request->post("tagValue");
            $productRuleCollectionId = (int)$request->post("productRuleCollectionId");
            $limit = $request->post("limit");
            $tagValueRecommend = $request->post("tagValueRecommend");
            $productRuleRecommend = (int)$request->post("productRuleRecommend");
            $productRuleId = (int)$request->post("productRuleId");
            $listProductRecommend = $request->post("listProductRecommend");
            $productRuleCollectionIdRecommend = $request->post("productRuleCollectionIdRecommend");

            $products = [];
            $productsRecommend = [];
            $cursor = "";
            $cursorQery = false;

            switch ($productRuleType) {
                case "tag":
                    $productsAll = [];
                    do {
                        if ($cursorQery){
                            $cursor = ', after: "'.$cursorQery.'"' ;
                        }

                        $graphQL = <<<Query
query {
  products(first:100, query:"tag:$tagValue" $cursor) {
    pageInfo {
      hasNextPage
    }
    edges {
      cursor
      node {
        id
        tags
      }
    }
  }
}
Query;

                        $data = $shopify->GraphQL->post($graphQL);
                        $productsAll1 = $data['data']['products']['edges'];
                        $productsAll = array_merge($productsAll, $productsAll1);

                        $hasNext = (boolean)$data['data']['products']['hasNextPage'];
                        if ($hasNext){
                            $cursorQery = end($productsAll)['cursor'];
                        }else{
                            $cursorQery = false;
                        }
                    } while ($cursorQery);

                    $products = $productsAll;
                    break;
                case "collection":
                    if ($productRuleCollectionId == 'all') {
                        do {
                            $products1 = $shopify->Product->get(['limit' => 250]);
                            $products = array_merge($products, $products1);
                        } while (count($products1) == 250);
                    } else {
                        do {
                            $products1 = $shopify->Collection($productRuleCollectionId)->Product->get(['limit' => 250]);
                            $products = array_merge($products, $products1);
                        } while (count($products1) == 250);
                    }
                    break;
                case "product":
                    $product = $shopify->Product($productRuleId)->get();
                    array_push($products, $product);
                    break;
            }

            switch ($productRecommendRuleType) {
                case "tag":
                    $cursor = "";
                    $cursorQery = false;
                    $productsAll = [];
                    do {
                        if ($cursorQery){
                            $cursor = ', after: "'.$cursorQery.'"' ;
                        }

                        $graphQL = <<<Query
query {
  products(first:100, query:"tag:$tagValueRecommend" $cursor) {
    pageInfo {
      hasNextPage
    }
    edges {
      cursor
      node {
        id
        tags
      }
    }
  }
}
Query;

                        $data = $shopify->GraphQL->post($graphQL);
                        $productsAll1 = $data['data']['products']['edges'];
                        $productsAll = array_merge($productsAll, $productsAll1);

                        $hasNext = (boolean)$data['data']['products']['hasNextPage'];
                        if ($hasNext){
                            $cursorQery = end($productsAll)['cursor'];
                        }else{
                            $cursorQery = false;
                        }
                    } while ($cursorQery);


                    $productsRecommend = $productsAll;
                    break;
                case "collection":
                    $sort = $productRuleRecommend == 1 ? "best-selling" : "created-desc";
//                    $sort = $productRuleRecommend == 1 ? "created" : "created-desc";
                    $productsRecommend = [];

                    if ($productRuleCollectionIdRecommend == 'all') {
                        do {
                            $productsRecommend1 = $shopify->Product->get(['limit' => 250,]);
                            $productsRecommend = array_merge($productsRecommend, $productsRecommend1);
                        } while (count($productsRecommend1) == 250);
                    } else {
                        do {
                            $productsRecommend1 = $shopify->Collection($productRuleCollectionIdRecommend)->Product->get(['limit' => 250]);
                            $productsRecommend = array_merge($productsRecommend, $productsRecommend1);
                        } while (count($productsRecommend1) == 250);
                    }

                    $collects = [];
                    foreach ($productsRecommend as $pr) {
                        array_push($collects, (object)[
                            "product_id" => $pr['id']
                        ]);
                    }
                    $params = array(
                        "title" => "Macbooks",
                        "published" => false,
                        "collects" => $collects,
                        "sort_order" => $sort
                    );
                    $collectionRecommend = $shopify->CustomCollection->post($params);
                    $productsRecommend = $shopify->Collection($collectionRecommend['id'])->Product->get(['limit' => $limit]);

                    $collectionRecommend = $shopify->CustomCollection($collectionRecommend['id'])->delete();


                    break;
                case "product":
                    $productsRecommend = $listProductRecommend;
                    break;
            }


            foreach ($products as $product) {

                try {
                    $val = "";

                    foreach ($productsRecommend as $pr) {
                        $val .= $pr["handle"] . ",";
                    }

                    $metafields = $shopify->Product($product["id"])->Metafield->get([
                        "namespace" => "ca_mawta",
                        "key" => "recommend_product"
                    ]);

                    if ($metafields) {
                        $metafield = $metafields[0];
                        $metafields = $shopify->Product($product["id"])->Metafield($metafield['id'])->put([
                            "key" => "recommend_product",
                            "namespace" => "ca_mawta",
                            "value" => $val,
                            "value_type" => "string",
                        ]);

                    } else {
                        $metafields = $shopify->Product($product["id"])->Metafield->post([
                            "key" => "recommend_product",
                            "namespace" => "ca_mawta",
                            "value" => $val,
                            "value_type" => "string",
                        ]);

                    }
                } catch (\Exception $e) {
                    logger($e->getMessage());
                    logger($e->getTraceAsString());
                }
            }

            return response()->json([
                'status' => "success",
                'message' => "saved",
            ]);
        } catch (\Exception $e) {
            logger($e->getMessage());
            logger($e->getTraceAsString());
        }
    }
}
