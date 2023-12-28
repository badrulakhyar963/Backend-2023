const Student = require("../models/Student");

class StudentController{
  index(req, res) {
    const students = Student.all();

    const data = {
      message: "Menampilkan semua students",
      data: students,
    };
    res.json(data);
  }
  
}