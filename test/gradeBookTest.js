var gradeBook = require('../lib/gradeBook').gradeBook;

exports["setUp"] = function(callback) {
    gradeBook.reset();
    callback();
};

exports["Should add a new grade and return count of 1"] = function(test) {
    gradeBook.addGrade(90);
    test.equal(gradeBook.getCountOfGrades(), 1);
    test.done();
};

exports["Should return the average of 75"] = function(test) {
    gradeBook.addGrade(100);
    gradeBook.addGrade(50);
    test.equal(gradeBook.getAverage(), 75);
    test.done();
};

exports["Should return letter grade A"] = function(test) {
    gradeBook.addGrade(100);
    gradeBook.addGrade(90);
    test.equal(gradeBook.getLetterGrade(), "A");
    test.done();
};