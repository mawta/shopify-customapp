<?php

namespace App\Http\Controllers;

use App\Models\PriceRule;
use App\Traits\CheckTraits;
use Carbon\Carbon;
use Illuminate\Http\Request;

class PriceRuleController extends Controller
{
    use CheckTraits;

    public function getPriceRule(Request $request)
    {
        $shopify = $this->shopify();

        $price = [];
        $sinceId = 0;

        do {
            $price1 = [];
            if ($sinceId) {
                $price1 = $shopify->PriceRule->get(['limit' => 250, "since_id" => $sinceId]);

            } else {
                $price1 = $shopify->PriceRule->get(['limit' => 250]);
            }
            $sinceId = count($price1) > 1 ? end($price1)['id'] : null;
            $price = array_merge($price, $price1);
        } while (count($price1) == 250);

        return response()->json([
            'priceRules' => $price
        ]);
    }

    public function deletePriceRule(Request $request)
    {
        $shopify = $this->shopify();

        $id = $request->post('id');

        $price1 = $shopify->PriceRule($id)->delete();

        return response()->json([
            'status' => 'success'
        ]);
    }

    public function createPriceRule(Request $request)
    {
        $user = auth()->user();

        $type = $request->post('type');
        $limit = $request->post('limit');
        $discount = $request->post('discount');
        $discountType = $request->post('discountType');
        $productRuleType = $request->post('productRuleType');
        $productDiscountRuleType = $request->post('productDiscountRuleType');
        $tagValue = $request->post('tagValue');
        $productRuleCollectionId = $request->post('productRuleCollectionId');
        $tagValueDiscount = $request->post('tagValueDiscount');
        $productRuleCollectionIdDiscount = $request->post('productRuleCollectionIdDiscount');
        $productRuleDiscount = $request->post('productRuleDiscount');
        $listProductSelect = $request->post('listProductSelect');
        $listProductDiscount = $request->post('listProductDiscount');





        return $this->priceRule(
            $user,
            $productRuleType,
            $productDiscountRuleType,
            $tagValue,
            $productRuleCollectionId,
            $limit,
            $tagValueDiscount,
            $productRuleDiscount,
            $listProductDiscount,
            $listProductSelect,
            $productRuleCollectionIdDiscount,
            $discountType,
            $discount
        );
    }

    public function priceRule(
        $user,
        $productRuleType,
        $productDiscountRuleType,
        $tagValue,
        $productRuleCollectionId,
        $limit,
        $tagValueDiscount,
        $productRuleDiscount,
        $listProductDiscount,
        $listProductSelect,
        $productRuleCollectionIdDiscount,
        $discountType,
        $discount
    )
    {
        try {
            $shopify = $this->shopify($user);
            $products = [];
            $productsDiscount = [];
            $cursor = "";
            $cursorQery = false;

            switch ($productRuleType) {
                case "tag":
                    $productsAll = [];
                    $tags = explode(',', $tagValue);
                    foreach ($tags as $tg) {
                        do {
                            if ($cursorQery) {
                                $cursor = ', after: "' . $cursorQery . '"';
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
                            if ($hasNext) {
                                $cursorQery = end($productsAll)['cursor'];
                            } else {
                                $cursorQery = false;
                            }
                        } while ($cursorQery);
                    }

                    foreach ($productsAll as $pr) {
                        array_push($products, $pr['node']);
                    }
                    break;
                case "collection":
                    $sinceId = 0;
                    if ($productRuleCollectionId == 'all') {
                        do {
                            $products1 = [];
                            if ($sinceId) {
                                $products1 = $shopify->Product->get(['limit' => 250, 'since_id' => $sinceId]);

                            } else {
                                $products1 = $shopify->Product->get(['limit' => 250]);
                            }
                            $sinceId = count($products1) > 0 ? end($products1)['id'] : null;
                            $products = array_merge($products, $products1);
                        } while (count($products1) == 250);
                    } else {
                        do {
                            $products1 = [];
                            if ($sinceId) {
                                $products1 = $shopify->Collection($productRuleCollectionId)->Product->get(['limit' => 250, 'since_id' => $sinceId]);

                            } else {
                                $products1 = $shopify->Collection($productRuleCollectionId)->Product->get(['limit' => 250]);
                            }
                            $sinceId = count($products1) > 0 ? end($products1)['id'] : null;
                            $products = array_merge($products, $products1);
                        } while (count($products1) == 250);
                    }
                    break;
                case "product":
                    $products = $listProductSelect;
                    break;
            }

            switch ($productDiscountRuleType) {
                case "tag":
                    $tags = explode(',', $tagValueDiscount);
                    $count = is_array($tags) ? count($tags) : 1;
                    $limitRe = round($limit / $count);
                    $cursorQery = false;
                    foreach ($tags as $tg) {
                        $productsAll = [];
                        $productsDiscounts = [];
                        $cursor = "";
                        do {
                            if ($cursorQery) {
                                $cursor = ', after: "' . $cursorQery . '"';
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
                            if ($hasNext) {
                                $cursorQery = end($productsAll)['cursor'];
                            } else {
                                $cursorQery = false;
                            }
                        } while ($cursorQery);

                        $productsDiscounts = $productsAll;

                        $collects = [];
                        foreach ($productsDiscounts as $pr) {
                            $ids = explode('/', $pr['node']['id']);

                            $id = end($ids);
                            array_push($collects, (object)[
                                "product_id" => $id
                            ]);
                        }
                        $sort = $productRuleDiscount == 1 ? "best-selling" : "created-desc";
                        $params = array(
                            "title" => "Macbooks",
                            "published" => false,
                            "collects" => $collects,
                            "sort_order" => $sort
                        );
                        $collectionDiscount = $shopify->CustomCollection->post($params);
                        $productsDiscounts = $shopify->Collection($collectionDiscount['id'])->Product->get(['limit' => $limitRe]);

                        $collectionDiscount = $shopify->CustomCollection($collectionDiscount['id'])->delete();

                        $productsDiscount = array_merge($productsDiscount, $productsDiscounts);

                    }


                    break;
                case "collection":
                    $sinceId = 0;
                    $sort = $productRuleDiscount == 1 ? "best-selling" : "created-desc";
//                    $sort = $productRuleDiscount == 1 ? "created" : "created-desc";
                    $productsDiscount = [];

                    if ($productRuleCollectionIdDiscount == 'all') {
                        do {
                            $productsDiscount1 = [];
                            if ($sinceId) {
                                $productsDiscount1 = $shopify->Product->get(['limit' => 250,]);
                            } else {
                                $productsDiscount1 = $shopify->Product->get(['limit' => 250, 'since_id' => $sinceId]);
                            }

                            $sinceId = count($productsDiscount1) > 0 ? end($productsDiscount1)['id'] : null;
                            $productsDiscount = array_merge($productsDiscount, $productsDiscount1);
                        } while (count($productsDiscount1) == 250);
                    } else {
                        do {
                            $productsDiscount1 = [];

                            if ($sinceId) {
                                $productsDiscount1 = $shopify->Collection($productRuleCollectionIdDiscount)->Product->get(['limit' => 250, 'since_id' => $sinceId]);
                            } else {
                                $productsDiscount1 = $shopify->Collection($productRuleCollectionIdDiscount)->Product->get(['limit' => 250]);
                            }
                            $sinceId = count($productsDiscount1) > 0 ? end($productsDiscount1)['id'] : null;
                            $productsDiscount = array_merge($productsDiscount, $productsDiscount1);
                        } while (count($productsDiscount1) == 250);
                    }

                    $collects = [];
                    foreach ($productsDiscount as $pr) {
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
                    $collectionDiscount = $shopify->CustomCollection->post($params);
                    $productsDiscount = $shopify->Collection($collectionDiscount['id'])->Product->get(['limit' => $limit]);

                    $collectionDiscount = $shopify->CustomCollection($collectionDiscount['id'])->delete();


                    break;
                case "product":
                    $productsDiscount = $listProductDiscount;
                    break;
            }


            $valueType = $discountType == 1 ? "percentage" : "fixed_amount";
            $valueTypeString = $discountType == 1 ? "%" : "$";


            $productId = "[";
            $productIds = "";
            $productIdDiscount = "[";
            $productIdDiscounts = "";

            foreach ($products as $pr) {
                if (!str_contains($pr['id'],"gid://shopify/")){
                    $id = "gid://shopify/Product/" . $pr['id'];
                }else{
                    $id =  $pr['id'];
                }
                $productId .= '"' . $id . '",';
                $productIds .= '"' . $id . '",';
            }

            foreach ($productsDiscount as $pr) {
                if (!str_contains($pr['id'],"gid://shopify/")){
                    $id = "gid://shopify/Product/" . $pr['id'];
                }else{
                    $id =  $pr['id'];
                }
                $productIdDiscount .= '"' . $id . '",';
                $productIdDiscounts .= '"' . $id . '",';
            }

            $productId .= "]";
            $productIdDiscount .= "]";

            $title = "BY X AND Y TO GET {$discount}{$valueTypeString} discount ".Carbon::now()->timestamp;

            $start = Carbon::now()->toDateString();

            $discount1 = $discount / 100;
            $value = $discountType == 1 ? "{discountOnQuantity: {quantity: \"1\", effect: {percentage: $discount1}}}" : "{appliesOnEachItem: false, amount: \"$discount\"}";


            $graphQL = <<<Query
mutation {
  discountAutomaticBxgyCreate(
    automaticBxgyDiscount: {
     title: "$title",
     startsAt: "$start",
     usesPerOrderLimit: "1",
     customerBuys: {
        value: {quantity: "$limit"},
        items: {products: {productsToAdd: $productId}}
        },
     customerGets: {
       value: $value, 
       items: {products: {productsToAdd: $productIdDiscount}}
       }
 }) {
    userErrors {
      field
      message
      code
    }
     automaticDiscountNode {
      automaticDiscount {
        ... on DiscountAutomaticBxgy {
          title
          summary
          status
          id
          startsAt
        }
      }
    }
  }
}
Query;
            dd($graphQL);


            $data = $shopify->GraphQL->post($graphQL);
            dd($data);



            PriceRule::create([
                'user_id' => $user->id,
                'discount_id' => $user->id,
                'product_rule_type' => $productRuleType,
                'product_discount_rule_type' => $productDiscountRuleType,
                'tag_value' => $tagValue,
                'product_rule_collection_id' => $productRuleCollectionId,
                'limit' => $limit,
                "discount_type"=> $discountType,
                "discount" => $discount,
                'tag_value_discount' => $tagValueDiscount,
                'product_rule_discount' => $productRuleDiscount,
                'product_ids' => $productIds,
                'product_discount_ids' => $productIdDiscount,
                'product_rule_collection_id_discount' => $productRuleCollectionIdDiscount,
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
