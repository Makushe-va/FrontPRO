'use strict';
// We check for an empty array, if the length is 0 we return undefined. We store the first element in a variable

function deleteFirst(array) {
    if (array.length === 0) {
        return undefined;
    }
    const firstElement = array[0];
    // We shift all elements one position to the left
    for (let i = 1; i < array.length; i++) {
        array[i - 1] = array[i];
    }
    //Cut the length of the array and delete the last element
    array.length = array.length - 1;
    return firstElement;
}

const arr = [100, 20, 30, 40, 50];
const deleted = deleteFirst(arr);
console.log(deleted);
console.log(arr);


//We find the length of the array. We start the cycle. In each iteration, we replace the elements with cities.
// We return the inverted array
function reverseArray(arr1) {
    const length = arr1.length;

    for (let i = 0; i < Math.floor(length / 2); i++) {
        const temp = arr1[i];
        arr1[i] = arr1[length - 1 - i];
        arr1[length - 1 - i] = temp;
    }
    return arr1;
}


const arr1 = [1, 2, 3, 4, 5];
reverseArray(arr1);
console.log(arr1);