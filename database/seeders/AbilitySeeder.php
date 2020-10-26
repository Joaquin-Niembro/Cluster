<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class AbilitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('abilities')->insert([
            'id_ability' => '89',
            'name' => 'Laravel',
            'description' => 'Backend framework with mvc arquitechure'
        ]);
    }
}
