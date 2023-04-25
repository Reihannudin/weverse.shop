<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use function Symfony\Component\Translation\t;

class OrderResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
//            'product' => $this->product,
            'quantity' => $this->cart,
            'grand_total' => $this->grand_total,
            'customer_id' => $this->customer->id,
            'customer_email' => $this->customer->email,
            'customer_contact' => $this->customer->phone_number,
            'payment_id' => $this->payment->id,
            'payment_name' => $this->payment->name,
            'payment_image' => $this->payment->image,
            'shipping_id' => $this->shipping->id,
            'shipping_title' => $this->shipping->title,
            'shipping_fee' => $this->shipping->fee,
            'status_order' => $this->status_order,
            'shipping_status' => $this->status_shipping,
            'status_payment' => $this->status_payment,
            'address_id'=> $this->address->id,
            'address_receiver'=> $this->address->receiver,
            'address_lastname'=> $this->address->lastname,
            'address_street'=> $this->address->street,
            'address_city'=> $this->address->city,
            'address_state'=> $this->address->state,
            'address_postcode'=> $this->address->postcode,
            'address_phone_number' => $this->address->phone_number,
            'address_country'=> $this->address->country,
        ];
    }
}
