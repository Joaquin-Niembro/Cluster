<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    //use HasFactory;
    protected $primaryKey = 'id_company';
    public $incrementing = false;
    public $autoincrement = false;
    public $timestamps = false;
    protected $fillable = ['id_company', 'name', 'rfc', 'address', 'profile', 'schedule', 'sector'];
}
