'use strict';
//1. We create a function that calculates the arithmetic average of only the numerical elements of the given array.
function averageNum(arr) {
    let sum = 0;
    let count = 0;

    arr.forEach(item => {
        if (typeof item === 'number') {
            sum += item;
            count++;
        }
    });

    return count > 0 ? sum / count : 'There are no numbers in the array';
}
const mixArray = [1, 'hello', 3, true, 5, null, 7];
console.log(averageNum(mixArray));


//2. A function with three arguments (a number, a sign of a mathematical operation, a number).
// We derive the result of a mathematical operation
function doMath(x, znak, y) {
    switch (znak) {
        case '+': return x + y;
        case '-': return x - y;
        case '*': return x * y;
        case '/': return x / y;
        case '%': return x % y;
        case '^': return Math.pow(x, y);
        default: return 'unknown';
    }
}

const x = +prompt('Введіть число:');
const znak = prompt('Введіть знак (+, -, *, /, %, ^):');
const y = +prompt('Введіть число:');
console.log(doMath(x, znak, y));

//3. We ask the user for the number of rows and columns. The outer loop creates each row and the inner loop adds the elements.
//The value is entered by the user.

function fillArray() {
    const rows = +prompt('Скільки рядків буде в масиві?');
    const cols = +prompt('Скільки стовпців буде в рядку?');
    const result = [];

    for (let i = 0; i < rows; i++) {
        result[i] = [];
        for (let j = 0; j < cols; j++) {
            result[i][j] = prompt(`Введіть значення для елементу [${i}][${j}]:`);
        }
    }
    return result;
}

const userArray = fillArray();
console.log(userArray);


//4. We create a change for writing characters. We loop through each character in the string. We check the condition, yes or no.
// We get the result.

function deleteSym(str, symToDelete) {
    let result = '';

    for (let i = 0; i < str.length; i++) {
        let remove = false;

        for (let j = 0; j < symToDelete.length; j++) {
            if (str[i] === symToDelete[j]) {
                remove = true;
                break;
            }
        }
        if (!remove) {
            result += str[i];
        }
    }
    return result;
}

console.log(deleteSym("Hello world", ['e', 'o']));

