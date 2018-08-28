var gradeBook = require('./lib/gradeBook').gradeBook;
var express = require("express");
var app = express();

app.get("/", function(req, res) {
    res.send("Hello world!");
});

app.listen(3000);
console.log("Server is running and listening to port 3000...");