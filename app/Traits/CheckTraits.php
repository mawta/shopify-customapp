<?php

namespace App\Traits;

use App\Models\User;

trait CheckTraits{

    /**
     * @param User $user
     * @return \PHPShopify\ShopifySDK
     */
    public function shopify($user = null){

        if (!$user){
            $user = auth()->user();
        }

        $shop = $user->shop;
        $accessToken = $user->token;
        $config = array(
            'ShopUrl' => $shop,
            'AccessToken' => $accessToken,
        );

        $shopify = new \PHPShopify\ShopifySDK($config);

        return $shopify;
    }
}
