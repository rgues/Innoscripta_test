<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Settings extends Model
{
    use HasFactory;

      /**
     *  The attributes that are mass assignable
     * 
     *  @var array<int, string>
     */

     protected $fillable = [
        'font',
        'size',
        'backgound',
        'picture',
        'color',
        'user_id'
     ];

     /**
     *  Get the user 
     */
    public function user() 
    {
        return $this->belongsTo(User::class);
    }
}
