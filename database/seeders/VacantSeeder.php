<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class VacantSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('vacants')->insert([
            'id_vacant' => '148',
            'description' => 'Desarrollador con experiencia de un año en Laravel.',
            'salary' => '12000',
            'duration' => '4 meses',
            'company' => '111',
            'ability' => '89'
        ]);
    }
}
