<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class SectorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('sectors')->insert([
            'id_sector' => '23',
            'name' => 'Tecnológico',
            'description' => 'Proveedor de servicios de TI.'
        ]);
    }
}
