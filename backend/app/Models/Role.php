<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    use HasFactory;

    /**
     *  The attributes that are mass assignable
     * 
     *  @var array<int, string>
     */
     protected $fillables = [
        'name',
        'description',
        'slug'
     ];


    /**
    *  Get the user of Roles
    */
    public function users() 
    {
        return $this->belongsToMany(User::class);
    }


}