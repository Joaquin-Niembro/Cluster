<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class InstitutionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('institutions')->insert([
            'id_institution' => '134',
            'name' => 'udc',
            'address' => 'Avenida Corregidora 1 A.P. 10 y 128, Villa de Álvarez, 28976 Villa de Álvarez, Col.'
        ]);
    }
}
