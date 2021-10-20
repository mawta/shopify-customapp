<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AppController;
use App\Http\Controllers\RecommendController;
use App\Http\Controllers\PriceRuleController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



Route::middleware(['web'])->group(function() {
    Route::get('/authorize', [AppController::class, 'authorizeApp']);
    Route::get('/shopify', [AppController::class, 'shopify']);
    Route::get('/add_app', [AppController::class, 'addApp']);
    Route::get('/happy/{name}', [AppController::class, 'happy']);
    Route::get('/20-10', [AppController::class, 'happyT']);
//    Route::get('/login_app', [AppController::class, 'addApp']);

});


Route::middleware(['web','auth-shop'])->prefix('api')->group(function() {
    Route::get('/get-collections', [RecommendController::class, 'getCollections']);
    Route::get('/get-products', [RecommendController::class, 'getProducts']);
    Route::get('/get-history', [RecommendController::class, 'getHistory']);
    Route::get('/get-price-rule', [PriceRuleController::class, 'getPriceRule']);






    Route::post('/save-product-recommend', [RecommendController::class, 'saveProductRecommend']);
    Route::post('/active-auto', [RecommendController::class, 'activeAuto']);
    Route::post('/create-price-rule', [PriceRuleController::class, 'createPriceRule']);
});

Route::middleware(['web','auth-shop'])->group(function() {
    Route::get('/test', [AppController::class, 'test']);
    Route::get('/{any}', [AppController::class, 'index'])->where('any', '^((?!storage).)*$');
});