<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CartResource extends JsonResource
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
            'id' => (string)$this->id,
            'user_id' => $this->user->id,
            'username' => $this->user->name,
            'product_id' => $this->product->id,
            'product_image' => $this->product->image,
            'product_name' => $this->product->name,
            'product_price' => $this->product->price,
            'product_bonus' => $this->product->bonus,
            'quantity' => $this->quantity,
            'created_at' => $this->created_at,
            'update_at' => $this->updated_at,
        ];
    }
}
