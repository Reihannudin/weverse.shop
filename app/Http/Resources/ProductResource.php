<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
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
            'name' => $this->name,
            'slug' => $this->slug,
            'price' => $this->price,
            'artist_id' => $this->artist->id,
            'artist' => $this->artist->name,
            'category' => [
                $this->category,
                'sub_category' => $this->type,
            ],
            'image' => $this->image ,
            'description_image' => $this->description_images,
            'information_id' => $this->information,
            'sub_category_id' => $this->type->id,
            'quantity' => $this->quantity,
            'max_buy' => $this->maxBuy ,
            'status' => $this->status ,
            'shipment_status' => $this->shipment_status,
            'shipment_estimate' => $this->shipment_estimate,
            'created_at' => $this->created_at->toDateString(),
//            'updated_at' => $this->updated_at->toDateString(),

        ];
    }
}
