<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PeopleAbility extends Model
{
    //use HasFactory;
    protected $primaryKey = ['ability', 'person'];
    public $incrementing = false;
    public $autoincrement = false;
    public $timestamps = false;
    protected $fillable = ['ability', 'person', 'percentage'];
}
