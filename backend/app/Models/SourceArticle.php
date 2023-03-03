<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SourceArticle extends Model
{
    use HasFactory;

          /**
     *  The attributes that are mass assignable
     * 
     *  @var array<int, string>
     */

     protected $fillables = [
        'source_id',
        'article_id'
     ];
}
