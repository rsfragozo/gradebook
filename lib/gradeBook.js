var gradeBook = {
    _grades: [],
    addGrade: function(grade) {
        this._grades.push(grade);
    },
    getCountOfGrades: function() {
        return this._grades.length;
    }
}

exports.gradeBook = gradeBook;