<?php

use App\Http\Controllers\{
    AlternatifController,
    KriteriaController,
    ProfileController,
    TopsisController,
    UserController
};
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Auth/Login', [
        'status' => session('status'),
    ]);
})->middleware('guest');


Route::middleware('auth')->group(function () {

    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::middleware('can:admin')->group(function () {
        Route::get('/admin/dashboard', function () {
            return Inertia::render('Admin/Dashboard');
        })->name('admin.dashboard');

        // Users
        Route::resource('users', UserController::class)->except('create', 'store', 'destroy');

        // Kriteria
        Route::resource('kriteria', KriteriaController::class)->except('show')->parameters(['kriteria' => 'kriteria']);
    });

    // Alternatif
    Route::resource('alternatif', AlternatifController::class)->except('show');

    // TOPSIS
    Route::get('topsis', [TopsisController::class, 'topsis'])->name('topsis');
});

require __DIR__ . '/auth.php';
