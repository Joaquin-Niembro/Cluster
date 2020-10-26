<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class PeopleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('people')->insert([
            'id_person' => '89',
            'name' => 'Andres',
            'apellidoPaterno' => 'Rodriguez',
            'apellidoMaterno' => 'Marquez',
            'email' => 'andres@mail.com',
            'address' => 'Calz. Pedro A. Galván Nte. 120, Centro, 28000 Colima, Col.',
            'institution' => '134',
            'career' => '43'
        ]);
    }
}
