<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payments extends Model
{
    use HasFactory;

     protected $guarded = [];

     public function agreement(){
         return $this->belongsToMany(AgreementsPayments::class , 'pivot_agreements_payments','payment_id' ,
             'agreement_id' );
     }

    public function notice(){
        return $this->belongsToMany(NoticesPayments::class , 'pivot_notices_payments','payment_id' ,
            'notice_id' );
    }
}

