<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\Model;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     *  Get the user role
     */
    public function roles() 
    {
        return $this->belongsToMany(Role::class);
    }

    /**
     *  Get the user settings
     */
    public function settings() 
    {
        return $this->hasOne(Settings::class);
    }

    /**
     *  Get the search of a user
     */
    public function search() {
        return $this->hasMany(Search::class);
    }

    /**
     * Get the user preferences
     */
    public function preference() {
        return $this->hasMany(Preferences::class);
    }

    /**
     *  Get the user session
     */
    public function session() {
        return $this->hasMany(Session::class);
    }

    /** 
     *  Get the user articles
     */
    public function article() {
        return $this->hasMany(Article::class);
    }

}
