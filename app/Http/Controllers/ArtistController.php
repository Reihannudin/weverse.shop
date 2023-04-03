<?php

namespace App\Http\Controllers;

use App\Http\Resources\ArtistResource;
use App\Models\Artists;
use Illuminate\Http\Request;

class ArtistController extends Controller
{
    public function index(){
        $artist = ArtistResource::collection(
            Artists::all()
        );
        return response()->json($artist);;
    }
}
