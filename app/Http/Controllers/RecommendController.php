<?php

namespace App\Http\Controllers;

use App\Models\Recommend;
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

    public function getHistory(Request $request)
    {
        $user = auth()->user();

        $r  = Recommend::where('user_id',$user->id )->orderBy('updated_at','DESC')->get();
        return response()->json([
            "recommends" => $r
        ]);
    }

    public function getProducts(Request $request)
    {
        $shopify = $this->shopify();
        $products = [];

        do {
            $products1 = $shopify->Product->get(['limit' => 250]);
            $products = array_merge($products, $products1);
        } while (count($products1) == 250);

        return response()->json([
            "products" => $products
        ]);
    }

    public function activeAuto(Request $request){
        $id = $request->post('id');

        $r = Recommend::find($id);

        $r->update([
            'active_auto' => 1
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
                    $tags = explode(',',$tagValue);
                    foreach ($tags as $tg){
                        do {
                            if ($cursorQery){
                                $cursor = ', after: "'.$cursorQery.'"' ;
                            }

                            $graphQL = <<<Query
query {
  products(first:100, query:"tag:$tg" $cursor) {
    pageInfo {
      hasNextPage
    }
    edges {
      cursor
      node {
        id
        tags
        handle
      }
    }
  }
}
Query;

                            $data = $shopify->GraphQL->post($graphQL);
                            $productsAll1 = $data['data']['products']['edges'];
                            $productsAll = array_merge($productsAll, $productsAll1);

                            $hasNext = (boolean)$data['data']['products']['pageInfo']['hasNextPage'];
                            if ($hasNext){
                                $cursorQery = end($productsAll)['cursor'];
                            }else{
                                $cursorQery = false;
                            }
                        } while ($cursorQery);
                    }

                     foreach ($productsAll as $pr){
                         array_push($products,$pr['node']);
                     }
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
                    $tags = explode(',',$tagValueRecommend);
                    $count = is_array($tags) ? count($tags) : 1;
                    $limitRe = round($limit / $count);
                    $cursor = "";
                    $cursorQery = false;
                   foreach ($tags as $tg){
                       $productsAll = [];
                       do {
                           if ($cursorQery){
                               $cursor = ', after: "'.$cursorQery.'"' ;
                           }

                           $graphQL = <<<Query
query {
  products(first:100, query:"tag:$tg" $cursor) {
    pageInfo {
      hasNextPage
    }
    edges {
      cursor
      node {
        id
        handle
        tags
      }
    }
  }
}
Query;

                           $data = $shopify->GraphQL->post($graphQL);
                           $productsAll1 = $data['data']['products']['edges'];
                           $productsAll = array_merge($productsAll, $productsAll1);

                           $hasNext = (boolean)$data['data']['products']['pageInfo']['hasNextPage'];
                           if ($hasNext){
                               $cursorQery = end($productsAll)['cursor'];
                           }else{
                               $cursorQery = false;
                           }
                       } while ($cursorQery);

                       $productsRecommends = $productsAll;

                       $collects = [];
                       foreach ($productsRecommends as $pr) {
                           $ids = explode('/',$pr['node']['id']);

                           $id = end($ids);
                           array_push($collects, (object)[
                               "product_id" => $id
                           ]);
                       }
                       $sort = $productRuleRecommend == 1 ? "best-selling" : "created-desc";
                       $params = array(
                           "title" => "Macbooks",
                           "published" => false,
                           "collects" => $collects,
                           "sort_order" => $sort
                       );
                       $collectionRecommend = $shopify->CustomCollection->post($params);
                       $productsRecommends = $shopify->Collection($collectionRecommend['id'])->Product->get(['limit' => $limitRe]);

                       $collectionRecommend = $shopify->CustomCollection($collectionRecommend['id'])->delete();

                       $productsRecommend = array_merge($productsRecommend,$productsRecommends);

                   }




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
                    $ids = explode('/',$product["id"]);

                    $id = end($ids);
                    $product["id"] = $id;

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

            Recommend::create([
                'user_id' => auth()->user()->id,
                'product_rule_type' => $productRuleType,
                'product_recommend_rule_type' => $productRecommendRuleType,
                'tag_value' => $tagValue,
                'product_rule_collection_id' => $productRuleCollectionId,
                'limit' => $limit,
                'tag_value_recommend' => $tagValueRecommend,
                'product_rule_recommend' => $productRuleRecommend,
                'product_rule_id' => $productRuleId,
                'product_rule_collection_id_recommend' => $productRuleCollectionIdRecommend,
            ]);

            return response()->json([
                'status' => "success",
                'message' => "saved",
            ]);
        } catch (\Exception $e) {
            logger($e->getMessage());
            logger($e->getTraceAsString());
            return response()->json([
                'message' => $e->getMessage(),
                'getTraceAsString' => $e->getTraceAsString(),
            ]);
        }
    }
}
