// Import Student Controller 
const StudentController = 
require("../controller/StudentController");

// import express
const express = require("express");

// buat object express
const router = express.Router();

router.get("/", (req, res) => {
  res.send("HELLLO WORLD");
});

// routing student
router.get("/students", StudentController.index);
router.post("/students", StudentController.store);
router.put("/students/:id",StudentController.update);
router.delete("/students/:id",StudentController.destroy);

// export express
module.exports = router;
