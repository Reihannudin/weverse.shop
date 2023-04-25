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

    public function cart(){
        return $this->belongsToMany(Cart::class , 'pivot_order_id_cart_id' , 'order_id' ,
        'cart_id');
    }

    public function customer(){
        return $this->belongsTo(User::class);
    }

    public function payment(){
        return $this->belongsTo(Payments::class);
    }

    public function status_shipping(){
        return $this->belongsToMany(Shipping::class , 'pivot_order_id_shipping_id' , 'order_id' ,
            'shipping_id'
        );
    }

    public function status_order(){
        return $this->belongsToMany(StatusOrder::class , 'pivot_order_id_status_order' , 'order_id' ,
            'status_order_id'
        );
    }

    public function shipping(){
        return $this->belongsTo(Shipping::class);
    }

    public function address(){
        return $this->belongsTo(Address::class);
    }
}
