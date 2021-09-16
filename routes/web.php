<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AppController;
use App\Http\Controllers\RecommendController;
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
//    Route::get('/login_app', [AppController::class, 'addApp']);

});


Route::middleware(['web','auth-shop'])->prefix('api')->group(function() {
    Route::get('/get-collections', [RecommendController::class, 'getCollections']);
    Route::get('/get-products', [RecommendController::class, 'getProducts']);






    Route::post('/save-product-recommend', [RecommendController::class, 'saveProductRecommend']);
});

Route::middleware(['web','auth-shop'])->group(function() {
    Route::get('/test', [AppController::class, 'test']);
    Route::get('/{any}', [AppController::class, 'index'])->where('any', '^((?!storage).)*$');
});