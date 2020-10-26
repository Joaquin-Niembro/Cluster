<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class CompanySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('companies')->insert([
            'id_company' => '113',
            'name' => 'SoftwareProd',
            'rfc' => 'VECJ444326XXX',
            'address' => 'AV. Jorge Cardenas #200 cp.28017 Colima,Col.',
            'profile' => 'proveedor',
            'schedule' => '09:00am-06:00pm',
            'sector' => '23' 
        ]);
    }
}
