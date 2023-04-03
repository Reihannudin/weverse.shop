<?php

namespace App\Http\Controllers;

use App\Http\Resources\TypeResource;
use App\Models\Types;
use Illuminate\Http\Request;

class TypeController extends Controller
{
    public function index(){
        $type = TypeResource::collection(
            Types::all()
        );
        return $type;
    }
}
