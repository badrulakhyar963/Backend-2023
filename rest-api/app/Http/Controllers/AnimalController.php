<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AnimalController extends Controller
{
    public $animals = ["kucing", "ayam", "ikan"];
    public function index()
    {
        foreach ($this->animals as $animal) {
            echo $animal;
            echo "<br>";
        }
    }
    public function store(Request $request)
    {
        array_push($this->animals, $request->nama);
        return $this->index();
    }

    public function update(Request $request, $id)
    {
        $this->animals[$id] = $request->nama;
        return $this->index();
    }

    public function destroy($id)
    {
        array_splice($this->animals, $id, 1);
        return $this->index();
    }
}
