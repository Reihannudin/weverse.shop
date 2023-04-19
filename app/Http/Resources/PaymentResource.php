<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PaymentResource extends JsonResource
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
            'image' => $this->image,
            'agreements' => $this->agreement,
            'notices' => $this->notice,
//                $this->notice
//            ],
            'created_at' => $this->created_at->toDateString(),
//            'updated_at' => $this->updated_at->toDateString(),
        ];
    }
}
