<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sound extends Model
{
    use HasFactory;

      /**
     *  The attributes that are mass assignable
     * 
     *  @var array<int, string>
     */

     protected $fillable = [
        'name',
        'url',
        'article_id'
     ];

     
    /** 
     *  Get the article that listen that sound
     */
    public function article() {
        return $this->belongsTo(Article::class);
    }
}
