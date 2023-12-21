// Membuat Class StudentController
const express = require('express');
const studentsData = require('../data/students');

class StudentController {
  index(req, res) {
    res.json({ data: studentsData });
  }

  store(req, res) {
    const { nama } = req.body;
    studentsData.push(nama);
    res.json({ message: `Menambahkan data students: ${nama}`, data: studentsData });
  }

  update(req, res) {
    const { id } = req.params;
    const { nama } = req.body;
    studentsData[id - 1] = nama;
    res.json({ message: `Mengedit students id: ${id}, nama ${nama}`, data: studentsData });
  }

  destroy(req, res) {
    const { id } = req.params;
    const deletedStudent = studentsData.splice(id - 1, 1);
    res.json({ message: `Menghapus students id: ${id}`, data: deletedStudent });
  }
}

// Meabuat object StudentController
const object = new StudentController();
// Export object StudentController
module.exports = object;
