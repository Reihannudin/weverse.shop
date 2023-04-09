<?php

use App\Http\Controllers\ArtistController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BannerController;
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

// auth
//Route::get('/login' , [AuthController::class  , 'login']);
//Route::get('/register' , [AuthController::class  , 'register']);
//Route::get('/logout' , [AuthController::class  , 'logout']);
//Route::get('/forgot/password' , [AuthController::class  , 'forgotPassword']);
//


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