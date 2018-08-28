var gradeBook = require('./lib/gradeBook').gradeBook;
var express = require("express");
var app = express();

app.get("/", function(req, res) {
    res.send("Hello world!");
});

app.get("/grade", function(req, res) {
    var grades = req.query.grades.split(",");
    
    for(var i = 0; i < grades.length; i++) {
        gradeBook.addGrade(parseInt(grades[i]));
    }

    res.send("Your average grade is " + gradeBook.getAverage() + " (" + gradeBook.getLetterGrade() + ")");

});

app.listen(3000);
console.log("Server is running and listening to port 3000...");