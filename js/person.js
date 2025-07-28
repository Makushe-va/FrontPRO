"use strict";

class Person {
    firstName = null;
    lastName = null;
    birthYear = null;

    constructor(firstName, lastName, birthYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    getAge(){
        return new Date().getFullYear() - this.birthYear;
    }
}

