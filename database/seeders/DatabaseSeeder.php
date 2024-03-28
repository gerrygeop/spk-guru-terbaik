<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        \App\Models\User::factory(10)->create();
        \App\Models\User::factory()->create([
            'role' => 'admin',
        ]);

        DB::table('kriteria')->insert([
            [
                'nama' => 'Pedagogik',
                'bobot' => floatval('25'),
            ],
            [
                'nama' => 'Kepribadian',
                'bobot' => floatval('20'),
            ],
            [
                'nama' => 'Sosial',
                'bobot' => floatval('20'),
            ],
            [
                'nama' => 'Kedisiplinan',
                'bobot' => floatval('15'),
            ],
            [
                'nama' => 'Profesional',
                'bobot' => floatval('20'),
            ],
        ]);

        DB::table('sub_kriteria')->insert([
            // Pedagogik
            [
                'kriteria_id' => 1,
                'nama' => 'Sangat Baik',
                'bobot' => 4,
            ],
            [
                'kriteria_id' => 1,
                'nama' => 'Baik',
                'bobot' => 3,
            ],
            [
                'kriteria_id' => 1,
                'nama' => 'Cukup Baik',
                'bobot' => 2,
            ],
            [
                'kriteria_id' => 1,
                'nama' => 'Kurang Baik',
                'bobot' => 1,
            ],

            // Kepribadian
            [
                'kriteria_id' => 2,
                'nama' => 'Sangat Baik',
                'bobot' => 4,
            ],
            [
                'kriteria_id' => 2,
                'nama' => 'Baik',
                'bobot' => 3,
            ],
            [
                'kriteria_id' => 2,
                'nama' => 'Cukup Baik',
                'bobot' => 2,
            ],
            [
                'kriteria_id' => 2,
                'nama' => 'Kurang Baik',
                'bobot' => 1,
            ],

            // Sosial
            [
                'kriteria_id' => 3,
                'nama' => 'Sangat Baik',
                'bobot' => 4,
            ],
            [
                'kriteria_id' => 3,
                'nama' => 'Baik',
                'bobot' => 3,
            ],
            [
                'kriteria_id' => 3,
                'nama' => 'Cukup Baik',
                'bobot' => 2,
            ],
            [
                'kriteria_id' => 3,
                'nama' => 'Kurang Baik',
                'bobot' => 1,
            ],

            // Kedisiplinan
            [
                'kriteria_id' => 4,
                'nama' => 'Sangat Baik',
                'bobot' => 4,
            ],
            [
                'kriteria_id' => 4,
                'nama' => 'Baik',
                'bobot' => 3,
            ],
            [
                'kriteria_id' => 4,
                'nama' => 'Cukup Baik',
                'bobot' => 2,
            ],
            [
                'kriteria_id' => 4,
                'nama' => 'Kurang Baik',
                'bobot' => 1,
            ],

            // Profesional
            [
                'kriteria_id' => 5,
                'nama' => 'Sangat Baik',
                'bobot' => 4,
            ],
            [
                'kriteria_id' => 5,
                'nama' => 'Baik',
                'bobot' => 3,
            ],
            [
                'kriteria_id' => 5,
                'nama' => 'Cukup Baik',
                'bobot' => 2,
            ],
            [
                'kriteria_id' => 5,
                'nama' => 'Kurang Baik',
                'bobot' => 1,
            ],
        ]);
    }
}
