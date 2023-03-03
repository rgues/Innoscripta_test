<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    use HasFactory;

    /**
     *  The attributes that are mass assignable
     * 
     *  @var array<int, string>
     */

     protected $fillables = [ 'title',
        'description',
        'status',
        'date',
        'category_id',
        'user_id'
     ];

     /** 
     *  Get the category 
     */
    public function category() {
        return $this->hasOne(Category::class);
    }

    /** 
     *  Get the creator
     */
    public function user() {
        return $this->belongsTo(User::class);
    }

    /** 
     *  Get the videos
     */
    public function videos() {
        return $this->hasMany(Video::class);
    }


    /** 
     *  Get the pictures
     */
    public function pictures() {
        return $this->hasMany(Picture::class);
    }

    
    /** 
     *  Get the sounds
     */
    public function sounds() {
        return $this->hasMany(Sound::class);
    }


     /** 
     *  Get the tags
     */
    public function tags() {
        return $this->hasMany(Tags::class);
    }

    /** 
     *  Get the sources
     */
    public function sources() {
        return $this->belongsToMany(Source::class);
    }

    /**
    *  Get the languages
    */
    public function languages() {
        return $this->belongsToMany(Language::class);
    }


}
