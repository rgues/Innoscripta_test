<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;


class ArticleResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {

        return [
            'id' => $this->id,
            'attributes' => [
                'title' => $this->title,
                'description' => $this->description,
                'status' => $this->status,
                'date' => $this->updated_at,
                'category_id'=> $this->category_id,
                'user_id' => $this->user_id,
                'created_at' => $this->created_at,
                'updated_at' => $this->updated_at
            ],
            'relationships' => [
               'id' => (string) $this->user ? $this->user->id : '',
               'user_name' => $this->user ?  $this->user->name : '',
               'user_email' => $this->user ?  $this->user->email : ''
            ]
        ];
    }
}
