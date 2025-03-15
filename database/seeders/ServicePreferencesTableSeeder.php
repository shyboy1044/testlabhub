<?php

use Illuminate\Database\Seeder;

class ServicePreferencesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(\App\Models\ServicePreference::class)->create([
            'name' => 'TEST',
        ]);

        factory(\App\Models\ServicePreference::class)->create([
            'name' => 'EMISSION TEST - Unintentional Radiators',
        ]);

        factory(\App\Models\ServicePreference::class)->create([
            'name' => 'EMISSION TEST - Intentional Radiators',
        ]);

        factory(\App\Models\ServicePreference::class)->create([
            'name' => 'EMISSION TEST - Spread Spectrum Transmitter (DSS)',
        ]);

        factory(\App\Models\ServicePreference::class)->create([
            'name' => 'EMISSION TEST - Intentional Radiators',
        ]);
    }
}
