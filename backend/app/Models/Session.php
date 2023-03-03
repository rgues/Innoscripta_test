<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Session extends Model
{
    use HasFactory;

      /**
     *  The attributes that are mass assignable
     * 
     *  @var array<int, string>
     */

     protected $fillable = [
        'start',
        'end',
        'status',
        'user_id'
     ];

      /**
      *   Get the user that owns the session
      */
    public function user() {
        return $this->belongsTo(User::class);
    }
}
