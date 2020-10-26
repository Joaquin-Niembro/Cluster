<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ability extends Model
{
    //use HasFactory;
    protected $primaryKey = 'id_ability';
    public $incrementing = false;
    public $autoincrement = false;
    public $timestamps = false;
    protected $fillable = ['id_ability', 'name', 'description'];
    
}
