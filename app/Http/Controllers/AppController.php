<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Traits\CheckTraits;
use Illuminate\Http\Request;

class AppController extends Controller
{
    public function test(Request $request){
        $user = auth()->user();
        $shop = $user->shop;
        $accessToken = $user->token;
        $config = array(
            'ShopUrl' => $shop,
            'AccessToken' => $accessToken,
        );

        $shopify = new \PHPShopify\ShopifySDK($config);

        $product = $shopify->Collection(262215991386)->Product->get(['limit' => 250]);
        $product = $shopify->Collection(262215958618)->Product->get(['limit' => 250]);
        dd($product);
        return 1;
    }

    public function index(){
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

        $user = User::where("shop",$domain)->first();


        if(!$user){
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
           'token' =>  $accessToken
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

        $scopes = 'read_products,write_products,read_script_tags,write_script_tags';
//This is also valid
//$scopes = array('read_products','write_products','read_script_tags', 'write_script_tags');
        $redirectUrl = url("/authorize");

        \PHPShopify\AuthHelper::createAuthRequest($scopes, $redirectUrl);
    }

    public function addApp(Request $request)
    {
        $domain = $request->get("shop");
        return $this->loginShopify($domain);
    }
}
