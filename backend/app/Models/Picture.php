<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Picture extends Model
{
    use HasFactory;

     /**
     *  The attributes that are mass assignable
     * 
     *  @var array<int, string>
     */

     protected $fillable = [
        'description',
        'url'
     ];

    /** 
     *  Get the article that used the picture
     */
    public function picture() {
        return $this->belongsTo(Picture::class);
    }
}
