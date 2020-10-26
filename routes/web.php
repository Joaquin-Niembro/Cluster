<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\InstitutionController;
use App\Http\Controllers\CareerController;
use App\Http\Controllers\PeopleController;
use App\Http\Controllers\AbilityController;
use App\Http\Controllers\PeopleAbilitiesController;
use App\Http\Controllers\SectorController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\VacantController;
use App\Models\Institution;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::resources([    
    'api/careers' => CareerController::class,
    'api/institutions' => InstitutionController::class,
    'api/people' => PeopleController::class,
    'api/abilities' => AbilityController::class,
    'api/peopleAbilities' => PeopleAbilitiesController::class,
    'api/sectors' => SectorController::class,
    'api/companies' => CompanyController::class,
    'api/vacants' => VacantController::class
]);
