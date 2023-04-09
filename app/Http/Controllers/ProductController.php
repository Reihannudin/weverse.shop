<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductResource;
use App\Http\Resources\SubCategoyResource;
use App\Models\Categories;
use App\Models\Products;
use App\Models\SubCategories;
use App\Models\Types;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index(){
        $product = ProductResource::collection(
            Products::all()
        );
        return $product;
    }

    public function show($language , $shop_currency , $artist_id , $product_id){
        $product = ProductResource::collection(
            Products::query()->where('artist_id' , $artist_id)->where('id' , $product_id)->get()
        );

        return response()->json($product);
    }


    public function showByCategory($language , $shop_currency , $artist_id , $categories_id){
//        $category = Categories::query()->where('artist_id' , $artist_id)->where('id' , $categories_id);

        $product = ProductResource::collection(
            Products::query()->where('artist_id' , $artist_id)->where('category_id' , $categories_id)->get()
        );

        return response()->json($product);
    }

    public function showBySubCategory($language , $shop_currency ,  $artist_id , $categories_id , $sub_categories_id){
        $sub_categories = SubCategoyResource::collection(
            SubCategories::query()->where('artist_id' , $artist_id)->where('id' , $sub_categories_id)->get()
        );

        return response()->json($sub_categories);
    }


}

//
//public function showByCategoryAndType($artist_id , $categories_id, $type_id){
//    $product = ProductResource::collection(
//        Products::query()->where('artist_id' , $artist_id)->where('category_id' , $categories_id)->where('type_id' , $type_id)->get()
//    );
//
//    return response()->json($product);
//}
