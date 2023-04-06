<?php

use App\Http\Controllers\ArtistController;
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
    return $request->user();
});

Route::get('/banner' , [BannerController::class , 'index']); // success
Route::get('/artist' , [ArtistController::class  , 'index']); // success
//Route::get('/artist/{artist_id}' , [ArtistController::class , 'show']);

Route::get('/shop/{artist_id} ' , [ShopController::class , 'show']); // success
Route::get('/shop/{artist_id}/product/{product_id}/v' , [ProductController::class , 'show']);  // success
Route::get('/shop/{artist_id}/categories' , [ShopController::class , 'categoriesByArtist']); // success
Route::get('/shop/{artist_id}/categories/{categories_id}' , [ProductController::class , 'showByCategory']);
Route::get('/shop/{artist_id}/type' , [ShopController::class , 'typeByArtist']); // success

Route::get('/product' , [ProductController::class , 'index']); // testing


//Route::get('/shop/{artist_id}/categories/{categories_id}/type/{type_id}' , [ProductController::class , 'showByCategoryAndType']);
//Route::get('/shop/{artist_id}/categories/{categories_id}' , [ProductController::class , 'showByCategory']);
//Route::get('/shop/{artist_id}/type/{type_id}' , [ProductController::class , 'showByType']);
//

//Artist
//Route::get('/shop/{artist_id}' , [ArtistController::class , 'show']);


