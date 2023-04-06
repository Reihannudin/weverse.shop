<?php

namespace App\Http\Controllers;

use App\Http\Resources\CategoryResource;
use App\Http\Resources\ProductResource;
use App\Http\Resources\TypeResource;
use App\Models\Artists;
use App\Models\Categories;
use App\Models\Products;
use App\Models\Types;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ShopController extends Controller
{

    public function show($artist_id){
        $product = ProductResource::collection(
            Products::query()->where('artist_id' , $artist_id)->get()
        );

        return response()->json($product);
    }

    public function categoriesByArtist($artist_id){
        $categories = CategoryResource::collection(
            Categories::query()->where('artist_id' , $artist_id)->get()
        );

        return response()->json($categories);
    }

    public function typeByArtist($artist_id){
        $type = Types::query()->where('artist_id' , $artist_id)->get();

        return response()->json($type);
    }

}
