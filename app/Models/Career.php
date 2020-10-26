<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Career extends Model
{
    //use HasFactory;
    protected $primaryKey = 'id_career';
    public $incrementing = false;
    public $autoincrement = false;
    public $timestamps = false;
    protected $fillable = ['id_career', 'name', 'institution'];
}
