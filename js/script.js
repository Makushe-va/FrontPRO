'use strict';

// 1. The loop goes from 10 to 20 and outputs each number.

for(let i=10; i<=20;i++){
    document.write(i);
    if(i<20){
        document.write(",")
    }
}


// 2. The loop goes from 10 to 20 and outputs the square of each number
//
// for(let i=10; i<=20;i++){
//     document.write(i*i);
//     if(i<20){
//     document.write(",")
//     }
// }

//3. The loop from 1 to 10 multiplies each number by 7 and outputs the result

// for (let i=1; i<=10;i++){
//     document.write("7*" + i + " = "+(7 * i));
//     if(i<10){
//         document.write("<br>");
//     }
// }

//4. We create a change that will accumulate all the numbers from 1 to 15. Each cycle adds the next number

// let sum=0;
// for(let i=1; i<=15;i++) {
//     sum += i;
// }
//     document.write(sum);



//5. Create a change that starts with 1, then multiplies by every number from 15 to 35

// let product = 1;
// for(let i=15; i<=35;i++){
//     product *= i;
// }
// document.write(product);
//


//6. We calculate the sum of all numbers. Divide by the number of numbers. We get the average value

// let sumSum = 0;
// for(let i=1; i<=500;i++){
//     sumSum += i;
// }
// let averageValue=sumSum / 500;
// document.write(averageValue);



//7. We create a variable that accumulates the sum of even numbers.
// We check whether the number is even.If so, we add to the variable

// let evenSum = 0;
// for (let i = 30; i <= 80; i++) {
//     if (i % 2 === 0) {
//         evenSum += i;
//     }
// }
// document.write(evenSum);
//


//8. The loop checks the numbers from 100 to 200. We check whether the number is divisible by 3 without a remainder.

// for (let i = 100; i <= 200; i++) {
//     if (i % 3 === 0) {
//         document.write(i +"<br>");
//     }
// }


//9. We create a variable equal to a natural number. We check each number to see if it is a divisor.
// If the number is a divisor, then we output it

// let number = 100;
// for(let i= 1; i <= number; i++){
//     if (number % i === 0) {
//         document.write(i + "<br>");
//     }
// }


// 10. We create a variable equal to a natural number. We check whether it is a divisor and whether it is an even number.
//If both conditions are met, add to the variable (1 pc.).As a result, we get the number of its even divisors

// let number = 100;
// let evenDivisors = 0;
// for (let i = 1; i <= number; i++) {
//     if (number % i === 0 && i % 2 === 0) {
//         evenDivisors++;
//     }
// }
// document.write(evenDivisors);


//11. We create a variable equal to a natural number. We check whether it is a divisor and whether it is an even number.
// If both conditions are met,add the value of the even divisors. As a result, we get the sum of its even divisors.

// let num = 100;
// let evenDivSum = 0;
// for (let i = 1; i <= num; i++) {
//     if (num % i === 0 && i % 2 === 0) {
//         evenDivSum += i;
//     }
// }
// document.write(evenDivSum);

// 12.Multiplication table

// for (let i = 1; i <= 10; i++) {
//     for (let j = 1; j <= 10; j++) {
//         document.write(`${i} * ${j} = ${i * j}<br>`);
//     }
//     document.write("<br>");
// }
