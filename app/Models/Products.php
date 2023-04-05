<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function artist(){
        return $this->belongsTo(Artists::class);
    }

    public function category(){
        return $this->belongsTo(Categories::class);
    }

    public function information(){
        return $this->belongsTo(Informations::class);
    }

    public function type(){
        return $this->belongsTo(Types::class);
    }

    public function description_images(){
        return $this->belongsToMany(DescImage::class , 'desc_image_products' , 'product_id' , 'desc_image_id');
    }

    //    public function categories(){
//        return $this->belongsToMany(Categories::class , 'pivot_artist_categories' , 'artist_id' ,
//            'categories_id');
//    }

}
