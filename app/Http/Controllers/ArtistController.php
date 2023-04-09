<?php

namespace App\Http\Controllers;

use App\Http\Resources\ArtistResource;
use App\Http\Resources\CategoryResource;
use App\Http\Resources\ProductResource;
use App\Models\Artists;
use App\Models\Categories;
use App\Models\Products;
use Illuminate\Http\Request;

class ArtistController extends Controller
{
    public function index(){

        $artist = ArtistResource::collection(
            Artists::all()
        );
        return response()->json($artist);
    }

    public function show($language , $artist_id){
        $artist = ArtistResource::collection(
            Artists::query()->where('id' , $artist_id)->get()
        );

        return response()->json($artist);
    }



}
