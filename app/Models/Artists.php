<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Artists extends Model
{
    use HasFactory;

    protected $guarded = [];


    public function categories(){
        return $this->belongsToMany(Categories::class , 'pivot_artist_categories' , 'artist_id' ,
            'categories_id');
    }

    public function type(){
        return $this->belongsToMany(Types::class , 'type_categories' , 'artist_categories_id' ,
            'type_id');
    }


}
