<?php

namespace App\Http\Controllers;

use App\Http\Resources\BannerResource;
use App\Models\Banner;
use Illuminate\Http\Request;

class BannerController extends Controller
{
    public function index(){
        $banner = BannerResource::collection(
            Banner::all()
        );
        return response()->json($banner);
    }
}
