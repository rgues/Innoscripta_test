<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Search extends Model
{
    use HasFactory;

      /**
     *  The attributes that are mass assignable
     * 
     *  @var array<int, string>
     */

     protected $fillable = [
        'title',
        'category_name',
        'source_name',
        'created_at',
        'user_id'
     ];

    /**
      *   Get the user that owns the search
      */
    public function user() {
        return $this->belongsTo(User::class);
    }
}
