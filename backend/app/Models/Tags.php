<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tags extends Model
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
     *  Get the articles that used the tag
     */
    public function article() {
        return $this->belongsTo(Article::class);
    }
}
