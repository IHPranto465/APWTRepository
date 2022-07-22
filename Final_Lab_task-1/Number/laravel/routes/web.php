<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PageController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\TeacherController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\LoginController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



Route::get('/',[PageController::class,'index'])->name('hello');
Route::get('/profile',[PageController::class,'Profile'])->name('profile');
Route::get('/studentlist',[StudentController::class,'studentlist'])->name('studentlist');
Route::get('/studentEdit/{id}/{name}',[StudentController::class,'studentEdit'])->name('studentEdit');
Route::post('/studentEdit',[StudentController::class,'studentEditsubmit'])->name('studentEdit');


Route::get('/studentDelete/{id}/{name}',[StudentController::class,'studentDelete']);

Route::get('/studentcreat',[StudentController::class,'studentcreat'])->name('studentcreat');
Route::post('/studentcreat',[StudentController::class,'studentcreatsubmit'])->name('studentcreat');

Route::get('/teacherCreate',[TeacherController::class,'teacherCreate'])->name('teacherCreate');
Route::post('/teacherCreate',[TeacherController::class,'teacherCreatesubmit'])->name('teacherCreate');

Route::get('/teacherList',[TeacherController::class,'teacherList'])->name('teacherList');

Route::get('/teacher/courses',[TeacherController::class,'teacherCourses'])->name('teacher.courses');

Route::get('/Login',[LoginController::class,'Login'])->name('Login');
Route::post('/Login',[LoginController::class,'LoginSubmit'])->name('Login');

Route::get('/logout',[LoginController::class,'logout'])->name('logout');

Route::get('/teacher/dash', [PageController::class,'teacherDash'])->name('teacherDash')->middleware('ValidTeacher');