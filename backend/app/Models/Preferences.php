<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Preferences extends Model
{
    use HasFactory;

      /**
     *  The attributes that are mass assignable
     * 
     *  @var array<int, string>
     */

     protected $fillable = [
        'name',
        'description',
        'user_id'
     ];

     /**
      *   Get the user that owns the preferencess
      */
    public function user() {
        return $this->belongsTo(User::class);
    }
}
