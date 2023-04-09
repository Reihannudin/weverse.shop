<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categories extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function type(){
        return $this->belongsToMany(SubCategories::class , 'categories_sub_categories' , 'artist_categories_id' ,
            'sub_categories_id');
    }

    public function product(){
        return $this->belongsToMany(Products::class , 'product_sub_categories' , 'sub_categories_id' ,
            'product_id');
    }


}
