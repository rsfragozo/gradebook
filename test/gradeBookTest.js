var gradeBook = require('../lib/gradeBook').gradeBook;

exports["Should add a new grade and return count of 1"] = function(test) {
    gradeBook.addGrade(90);
    test.equal(gradeBook.getCountOfGrades(), 1);
    test.done();
};

exports["Should calculate and return the average of grades"] = function(test) {
    gradeBook.addGrade(100);
    gradeBook.addGrade(50);
    test.equal(gradeBook.getAverage(), 75);
    test.done();
};