<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vacant extends Model
{
    //use HasFactory;
    protected $primaryKey = 'id_vacant';
    public $incrementing = false;
    public $autoincrement = false;
    public $timestamps = false;
    protected $fillable = ['id_vacant', 'description', 'salary', 'duration', 'company', 'ability'];
}
