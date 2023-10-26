<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AnimalController;

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


// Route::get('/animals', function () {
//     echo "menampilkan data animals";
// });
// Route::post('/animals', function () {
//     echo "menambah hewan baru";
// });
// Route::put('/animals/{id}', function ($id) {
//     echo "mengupdate data hewan id $id";
// });
// Route::get('/animals/{id}', function ($id) {
//     echo "menghapus data hewan id $id";
// });
