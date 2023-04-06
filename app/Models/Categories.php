<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categories extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function type(){
        return $this->belongsToMany(Types::class , 'type_categories' , 'artist_categories_id' ,
            'type_id');
    }

    public function product(){
        return $this->belongsToMany(Products::class , 'type_product' , 'type_id' ,
            'product_id');
    }





}
