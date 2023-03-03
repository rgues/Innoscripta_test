<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Video extends Model
{
    use HasFactory;

      /**
     *  The attributes that are mass assignable
     * 
     *  @var array<int, string>
     */

     protected $fillables = [
        'name',
        'url'
     ];

    /** 
     *  Get the article that content the video
     */
    public function article() {
        return $this->belongsTo(Article::class);
    }

}
