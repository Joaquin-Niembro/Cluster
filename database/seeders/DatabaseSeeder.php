<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        //\App\Models\User::factory(10)->create();
        $this->call(InstitutionSeeder::class);
        $this->call(CareerSeeder::class);
        $this->call(PeopleSeeder::class);
        $this->call(AbilitySeeder::class);
        $this->call(PeopleAbilitySeeder::class);
        $this->call(SectorSeeder::class);
        $this->call(CompanySeeder::class);
        $this->call(VacantSeeder::class);
    }
}
