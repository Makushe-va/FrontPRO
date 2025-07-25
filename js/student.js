"use strict";

function Student(firstName, lastName, birthYear, grades = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.grades = grades;
    this.attendance = new Array(25).fill(null);
    this.attendanceIndex = 0;
}
//Creating a full name
Student.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
};
//Calculating the student's age
Student.prototype.getAge = function () {
    return new Date().getFullYear() - this.birthYear;
};

//Calculation of the average score
Student.prototype.getAverageGrade = function () {
    if (this.grades.length === 0) return 0;
    const sum = this.grades.reduce((a, b) => a + b, 0);
    return sum / this.grades.length;
};

Student.prototype.present = function () {
    if (this.attendanceIndex >= 25) {
        throw new Error("Maximum number of visits reached (25).");
    }
    this.attendance[this.attendanceIndex++] = true;
};

Student.prototype.absent = function () {
    if (this.attendanceIndex >= 25) {
        throw new Error("Maximum number of visits reached (25).");
    }
    this.attendance[this.attendanceIndex++] = false;
};

//Calculation of average attendance
Student.prototype.getAverageAttendance = function () {
    const valid = this.attendance.filter(v => v !== null);
    if (valid.length === 0) return 0;
    const present = valid.filter(v => v).length;
    return present / valid.length;
};

//We check the average grade and average attendance
Student.prototype.summary = function () {
    const avgGrade = this.getAverageGrade();
    const avgAttd = this.getAverageAttendance();

    if (avgGrade > 90 && avgAttd > 0.9) {
        return "Молодець!";
    } else if (avgGrade > 90 || avgAttd > 0.9) {
        return "Добре, але можна краще";
    } else {
        return "Редиска!";
    }
};


