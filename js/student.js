"use strict";

class Student extends Person{
    constructor(firstName, lastName, birthYear, grades = []) {
        super(firstName, lastName, birthYear, grades);
        this.grades = grades;
        this.attendance = new Array(25).fill(null);
        this.attendanceIndex = 0;
    }

    getAverageGrade() {
        if (this.grades.length === 0) return 0;
        const sum = this.grades.reduce((a, b) => a + b, 0);
        return sum / this.grades.length;
    }

    present() {
        if (this.attendanceIndex >= 25) {
            throw new Error("Maximum number of visits reached (25).");
        }
        this.attendance[this.attendanceIndex++] = true;
    }

    absent() {
        if (this.attendanceIndex >= 25) {
            throw new Error("Maximum number of visits reached (25).");
        }
        this.attendance[this.attendanceIndex++] = false;
    }

    getAverageAttendance() {
        const valid = this.attendance.filter(v => v !== null);
        if (valid.length === 0) return 0;
        const present = valid.filter(v => v).length;
        return present / valid.length;
    }

    summary() {
        const avgGrade = this.getAverageGrade();
        const avgAttd = this.getAverageAttendance();

        if (avgGrade > 90 && avgAttd > 0.9) {
            return "Молодець!";
        } else if (avgGrade > 90 || avgAttd > 0.9) {
            return "Добре, але можна краще";
        } else {
            return "Редиска!";
        }
    }
}
