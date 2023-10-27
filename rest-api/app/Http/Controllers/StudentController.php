<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;

class StudentController extends Controller
{
    public function index()
    {
        $Student = Student::all();
        $data = [
            'message' => 'getAllStudent',
            'data' => $Student,
        ];
        return response()->json($data, 200);
    }
    public function store(Request $request)
    {
        $input = [
            'nama' => $request->nama,
            'NIM' => $request->NIM,
            'email' => $request->email,
            'jurusan' => $request->jurusan,
        ];

        $Student = Student::create($input);

        $data = [
            'message' => 'student is created',
            'data' => $Student,
        ];

        return response()->json($data, 201);
    }
    public function update(Request $request, $id)
    {
        $Student = Student::find($id);
        $input = [
            'nama' => $request->nama??$Student->nama,
            'NIM' => $request->NIM??$Student->NIM,
            'email' => $request->email??$Student->email,
            'jurusan' => $request->jurusan??$Student->jurusan,
        ];
        $Student ->update($input);

        $data = [
            'message' => 'Student is update',
            'data' => $Student,
        ];

        return response()->json($data, 200);
    }
    public function destroy($id)
    {
        Student::find($id)->delete();
        $data = [
            'message' => 'Student is deleted',
        ];
        return response()->json($data, 200);
    }
}
