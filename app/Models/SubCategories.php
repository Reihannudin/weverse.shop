<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubCategories extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function product(){
        return $this->belongsToMany(Products::class , 'sub_categories_type' , 'sub_categories_id' ,
            'product_type_id');
    }

}
