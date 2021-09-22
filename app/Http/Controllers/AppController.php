<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Traits\CheckTraits;
use Illuminate\Http\Request;

class AppController extends Controller
{
    public function test(Request $request)
    {
        $user = auth()->user();
        $shop = $user->shop;
        $accessToken = $user->token;
        $config = array(
            'ShopUrl' => $shop,
            'AccessToken' => $accessToken,
        );

        $shopify = new \PHPShopify\ShopifySDK($config);

        $param = [
            "title" => "abcd123",
            "usage_limit" => 591997,
            "target_type" => "line_item",
            "value" => "-20.0",
            "entitled_product_ids" => [
                921728736
            ],
            "prerequisite_product_ids" => [
                921728736
            ],
            "target_selection"=> "entitled",
        ];
        $rule = $shopify->PriceRule->post($param);
        dd($rule);
        return 1;
    }

    public function index()
    {
        $user = auth()->user();
        $ver = filemtime(public_path("/js/index.js"));
        $app = [
            'ver' => $ver,
            'shop' => $user->shop,
            'id' => $user->id
        ];

        return view('app', compact('app'));
    }

    public function authorizeApp(Request $request)
    {

        $domain = $request->get("shop");

        $user = User::where("shop", $domain)->first();


        if (!$user) {
            $user = User::create([
                'shop' => $domain,
            ]);
        }
        $config = array(
            'ApiKey' => env("API_KEY"),
            'SharedSecret' => env('SHARED_SECRET'),
            'ShopUrl' => $domain,
            'ApiVersion' => env("API_VERSION"),
        );
        \PHPShopify\ShopifySDK::config($config);
        $accessToken = \PHPShopify\AuthHelper::getAccessToken();

        $user->update([
            'token' => $accessToken
        ]);

        auth()->login($user);

        return redirect("/");
    }

    public function shopify(Request $request)
    {

        $domain = $request->get("shop");

        return $this->loginShopify($domain);
    }

    public function loginShopify($domain)
    {
        $config = array(
            'ApiKey' => env("API_KEY"),
            'SharedSecret' => env('SHARED_SECRET'),
            'ShopUrl' => $domain,
            'ApiVersion' => env("API_VERSION"),
        );

        \PHPShopify\ShopifySDK::config($config);

        $scopes = 'read_discounts,write_discounts,read_products,write_products,read_script_tags,write_script_tags,read_price_rules,write_price_rules';
//This is also valid
//$scopes = array('read_products','write_products','read_script_tags', 'write_script_tags');
        $redirectUrl = url("/authorize");

        $log = \PHPShopify\AuthHelper::createAuthRequest($scopes, $redirectUrl, null, null, true);
        return redirect($log);
    }

    public function addApp(Request $request)
    {
        $domain = $request->get("shop");
        return $this->loginShopify($domain);
    }
}
