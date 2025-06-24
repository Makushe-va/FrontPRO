'use strict';
//1.We implement the function identically to the array method indexOf
function indexOf(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        }
    }
    return -1;
}
const arr1 = [1, 2, 3, 4, 5];
console.log(indexOf(arr1, 3));


//2. We implement the function identically to the array method lastIndexOf
function lastIndexOf(array, value) {
    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] === value) {
            return i;
        }
    }
    return -1;
}
const arr2 = [1, 2, 3, 4, 5];
console.log(lastIndexOf(arr2, 3));


//3.We implement the function identically to the array method find
function find(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            return array[i];
        }
    }
    return undefined;
}
const arr3 = [1, 2, 3, 4, 5];
console.log(find(arr3, n => n > 3));


//4.We implement the function identically to the array method findIndex
function findIndex(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            return i;
        }
    }
    return -1;
}
const arr4 = [1, 2, 3, 4, 5];
console.log(findIndex(arr4, n => n === 4));


//5.We implement the function identically to the array method includes
function includes(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return true;
        }
    }
    return false;
}
const arr5 = [1, 2, 3, 4, 5];
console.log(includes(arr5, 2));

//6.We implement the function identically to the array method every
function every(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (!callback(array[i], i, array)) {
            return false;
        }
    }
    return true;
}
const arr6 = [1, 2, 3, 4, 5];
console.log(every(arr6, n => n > 0));

//7.We implement the function identically to the array method some
function some(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            return true;
        }
    }
    return false;
}
const arr7 = [1, 2, 3, 4, 5];
console.log(some(arr7, n => n > 4));