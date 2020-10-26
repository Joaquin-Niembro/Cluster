<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class PeopleAbilitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('people_abilities')->insert([
            'ability' => '89',
            'person' => '89',
            'percentage' => '70%'
        ]);
    }
}
