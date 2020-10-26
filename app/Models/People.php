<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class People extends Model
{
    //use HasFactory;
    protected $primaryKey = 'id_person';    
    public $incrementing = false;
    public $autoincrement = false;
    public $timestamps = false;
    protected $fillable = ['id_person', 'name', 'apellidoPaterno', 'apellidoMaterno', 'email', 'address', 'institution', 'career'];
}
