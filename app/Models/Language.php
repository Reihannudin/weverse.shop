<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Language extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function currency(){
        return $this->belongsToMany( Currency::class ,'language_currency' , 'language_id' ,
            'currency_id');
    }

}
