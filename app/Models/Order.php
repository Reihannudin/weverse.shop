<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function product(){
        return $this->belongsToMany(Products::class , 'pivot_orders_id_product_id','order_id' ,
            'product_id' );
    }

    public function customer(){
        return $this->belongsTo(User::class);
    }

    public function cart(){
        return $this->belongsTo(Cart::class);
    }

    public function payment(){
        return $this->belongsTo(Payments::class);
    }

    public function shipping(){
        return $this->belongsTo(Shipping::class);
    }

    public function address(){
        return $this->belongsTo(Address::class);
    }
}
