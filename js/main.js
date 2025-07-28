"use strict";


const student1 = new Student("Sarah", "Davis", 1999, [95, 95, 95, 95]);
const student2 = new Student("Robert", "Smith", 2000, [90, 90, 95, 90] );
const student3 = new Student("David", "Miller", 2001, [60, 75, 65, 50]);


for (let i = 0; i < 23; i++) student1.present();
for (let i = 0; i < 2; i++) student1.absent();

for (let i = 0; i < 20; i++) student2.present();
for (let i = 0; i < 5; i++) student2.absent();

for (let i = 0; i < 25; i++) student3.absent();



console.log(`${student1.getFullName()}: ${student1.summary()}`);
console.log(`${student2.getFullName()}: ${student2.summary()}`);
console.log(`${student3.getFullName()}: ${student3.summary()}`);