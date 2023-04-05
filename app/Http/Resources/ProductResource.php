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
            'artist' => $this->artist->name,
            'category' => $this->category,
            'type' => $this->type,
            'image' => $this->image ,
            'description_image' => $this->description_image,
            'information_id' => $this->information,
            'type_id' => $this->type->name,
            'created_at' => $this->created_at->toDateString(),
            'updated_at' => $this->updated_at->toDateString(),

        ];
    }
}
