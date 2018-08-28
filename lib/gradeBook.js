var gradeBook = {
    _grades: [],
    addGrade: function(grade) {
        this._grades.push(grade);
    },
    getCountOfGrades: function() {
        return this._grades.length;
    },
    getAverage: function() {
        var total = 0;
        for (var i = 0; i < this._grades.length; i++) {
            total += this._grades[i];
        }
        return total/this._grades.length;
    },
    reset: function() {
        this._grades = [];
    }
}

exports.gradeBook = gradeBook;