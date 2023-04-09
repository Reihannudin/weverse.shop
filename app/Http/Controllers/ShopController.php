<?php

namespace App\Http\Controllers;

use App\Http\Resources\BannerResource;
use App\Http\Resources\CategoryResource;
use App\Http\Resources\CountryResource;
use App\Http\Resources\ProductResource;
use App\Http\Resources\TypeResource;
use App\Models\Artists;
use App\Models\Banner;
use App\Models\Categories;
use App\Models\Country;
use App\Models\Currency;
use App\Models\Language;
use App\Models\Products;
use App\Models\Types;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ShopController extends Controller
{

    public function show($language , $shop_currency , $artist_id){

//        $artist = Artists::query()->where('id' , $artist_id)->get();

        $product = ProductResource::collection(
            Products::query()->where('artist_id' , $artist_id)->get()
        );

        return response()->json($product);
    }

    public function categoriesByArtist($language , $shop_currency , $artist_id){
        $categories = CategoryResource::collection(
            Categories::query()->where('artist_id' , $artist_id)->get()
        );

        return response()->json($categories);
    }

    public function banner(){
        $banner = BannerResource::collection(
            Banner::all()
        );
        return response()->json($banner);
    }

    public function language(){
        $language = CountryResource::collection(
            Language::all()
        );
        return response()->json($language);
    }

    public function currency(){
        $curency = Currency::all();
        return response()->json($curency);
    }
}
