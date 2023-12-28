// import express
const express = require("express");
// definisikan route
const router = require("./routes/api");

// buat object express
const app = express();

// menggunakan middelware
app.use(express.json());
app.use(express.urlencoded());

// menggunakan routing (router)
app.use(router);

// mendefinisikan port
app.listen(3000,() => {
    console.log("server running at http://localhost:3000/");
});
