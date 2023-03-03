<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

     /**
     *  The attributes that are mass assignable
     * 
     *  @var array<int, string>
     */

     protected $fillable= [
        'name',
        'description',
        'picture',
        'created_at',
        'updated_at'
     ];

    /** 
     *  Get the articles of a category
     */
    public function article() {
        return $this->belongsToMany(Article::class);
    }
}
