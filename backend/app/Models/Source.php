<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Source extends Model
{
    use HasFactory;

      /**
     *  The attributes that are mass assignable
     * 
     *  @var array<int, string>
     */

    protected $fillables = [
        'name',
        'description'
     ];

    /** 
     *  Get the articles
     */
    public function articles() {
      return $this->belongsToMany(Article::class);
    }
}
