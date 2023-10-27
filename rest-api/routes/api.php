<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AnimalController;
use App\Http\Controllers\StudentController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
// Method GET
Route::get('/animlas', [AnimalController::class, "index"]);
// Method POST
Route::post('/animlas', [AnimalController::class, "store"]);
// Method PUT
Route::put('/animlas/{id}', [AnimalController::class, "update"]);
// Method Delete
Route::delete('/animlas/{id}', [AnimalController::class, "destroy"]);


// Rooute Student
Route::get('/student', [StudentController::class, "index"]);
Route::post('/student', [StudentController::class, "store"]);
Route::put('/student/{id}', [StudentController::class, "update"]);
Route::delete('/student/{id}', [StudentController::class, "destroy"]);
