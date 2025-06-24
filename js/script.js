'use strict';
const arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

// 1. We find the sum and number of positive elements
const positiveElem = arr.filter(num => num > 0);
const sumPositiveElem = positiveElem.reduce((sum, num) => sum + num, 0);
const numberPositiveElem = positiveElem.length;

console.log(sumPositiveElem);
console.log(numberPositiveElem);

//2. We find the minimum element of the array and its serial number.

const min = Math.min(...arr);
const minIndex = arr.indexOf(min);

console.log(min);
console.log(minIndex);

// 3. We find the max element of the array and its serial number.

const max = Math.max(...arr);
const maxIndex = arr.indexOf(max);

console.log(max);
console.log(maxIndex);

//4. We determine the number of negative elements
const negativeElem = arr.filter(num => num < 0).length;

console.log(negativeElem);

//5.  We find the number of odd positive elements.

const oddPositiveElem = positiveElem.filter(num => num % 2 !== 0).length;

console.log(oddPositiveElem);

//6. We find the number of even positive elements
const evenPositiveElem = positiveElem.filter(num => num % 2 === 0).length;

console.log(evenPositiveElem);

//7. We find the sum of even positive elements.
const evenPositiveSum = positiveElem
    .filter(num => num % 2 === 0)
    .reduce((sum, num) => sum + num, 0);

console.log(evenPositiveSum);

// 8. We find the sum of odd positive elements.
const oddPositiveSum = positiveElem
    .filter(num => num % 2 !== 0)
    .reduce((sum, num) => sum + num, 0);

console.log(oddPositiveSum);

//9. Let's find the product of positive elements.

const productPositive = positiveElem.reduce((product, num) => product * num, 1);

console.log(productPositive);

//10. We find the largest among the elements of the array, we reset the others to zero.
const onlyMax = arr.map(num => num === max ? num : 0);

console.log(onlyMax);

