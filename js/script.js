'use strict';

//1. We output numbers from 20 to 30. we use a step of 0.5
let output = "";
for (let i = 20; i <= 30; i += 0.5) {
    output += i + (i < 30 ? " " : "");
}
console.log(output);

//2. We create a change with the dollar rate.For each value, the amount in hryvnias is calculated. We derive the calculation.
const rate = 27;
for (let dollars = 10; dollars <= 100; dollars += 10) {
    let hryvnias = dollars * rate;
    console.log(`${dollars} USD = ${hryvnias} UAH`);
}

// 3.  We create a change that does not exceed the square of the number.if (i * i <= N) checks if the square of i is less than or equal to N. If so, the number is displayed. If not, the cycle stops.

const N = 300;
for (let i = 1; i <= 100; i++) {
    if (i * i <= N) {
        console.log(i);
    } else {
        break;
    }
}

// 4. We create a change for testing.We check whether number is divisible by any of these numbers without a remainder.
// if number % i === 0), then: it is not a prime number. We exit the cycle. We derive the result

const number = 13;
let prime = number > 1;
for (let i = 2; i < number; i++) {
    if (number % i === 0) {
        prime = false;
        break;
    }
}
console.log(`${number} ${prime ? "просте число" : "не просте числом"}`);

//5. We create a function with an argument of the number we are checking. We check two conditions: the number > 1 and the number is divisible by three without a remainder. Divide the number n by 3. We check whether the number n has become equal to 1.If so, the number was a power of three. If not, the number is not a power of three.
function threePowerCheck(n) {
    while (n > 1 && n % 3 === 0) {
        n /= 3;
    }
    return n === 1;
}
console.log(threePowerCheck(81));
console.log(threePowerCheck(12));





