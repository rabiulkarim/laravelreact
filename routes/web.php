<?php

use App\Http\Controllers\Welcome\WelcomeController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/',[WelcomeController::class,'index'])->name('index');
Route::post('/contact-mail',[WelcomeController::class,'contactMail'])->name('contactMail');
Route::get('/blog/{slug}',[WelcomeController::class,'blogView'])->name('blogView');

Route::get('/{slug}',[WelcomeController::class,'pageView'])->name('pageView');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';


