<?php

use App\Http\Controllers\ArtistController;
use App\Http\Controllers\Auth\LogoutController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BannerController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ShopController;
use App\Http\Controllers\TypeController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {

    Route::get('/user', function (Request $request) {
        return $request->user();
    });


});

Route::get('/logout', function () {
    return "logout";
});

Route::get('/cart/{user_id}' , [CartController::class , 'cart']);
Route::get('/add/{product_id}/to/cart/{user_id}' , [CartController::class , 'addToCart']);
Route::get('/cart/total/item/{user_id}' , [CartController::class , 'cartTotalItem']);
Route::get('/cart/total/price/{user_id}' , [CartController::class , 'cartTotalPrice']);
Route::get('/cart/remove/{rows_id}' , [CartController::class , 'cartRemove']);
Route::get('/cart/int/{rows_id}' , [CartController::class , 'cartIncrement']);
Route::get('/cart/dec/{rows_id}' , [CartController::class , 'cartDecrement']);


Route::get('/banner' , [ShopController::class , 'banner']); // success
Route::get('/language' , [ShopController::class , 'language']); // success
Route::get('/currency' , [ShopController::class , 'currency']); // success
Route::get('/artist' , [ArtistController::class  , 'index']);

Route::get('/{language}/artist/{artist_id}' , [ArtistController::class , 'show']);
//
Route::get('/{language}/shop/{shop_currency}/artist/{artist_id}/product/' , [ShopController::class , 'show']); // success
Route::get('/{language}/shop/{shop_currency}/artist/{artist_id}/product/v/{product_id}' , [ProductController::class , 'show']);  // success
Route::get('/{language}/shop/{shop_currency}/artist/{artist_id}/categories' , [ShopController::class , 'categoriesByArtist']); // s
Route::get('/{language}/shop/{shop_currency}/artist/{artist_id}/categories/{categories_id}' , [ProductController::class , 'showByCategory']);
Route::get('/{language}/shop/{shop_currency}/artist/{artist_id}/categories/{categories_id}/sub_categories/{sub_categories_id}' , [ProductController::class , 'showBySubCategory']);
