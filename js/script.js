'use strict';

const numPositive = (arr) => {
    const positiveArr = [];
    if (arr.length === 0) return 'The array is empty';
    for (let i = 0; i < arr.length; i++) {
        const current = arr[i];
        if (current > 0) {
            positiveArr.push(current);
        }
    }
    return positiveArr.length > 0 ? positiveArr : null;
}
const arr = [1,2,3,4,5,-1,-2,-3,-4,-5];
console.log(numPositive(arr));




//
// function numPositiveOne(arr){
//     const positiveArr = [];
//     if(arr.length === 0){
//         return 'The array is empty';
//     }
//     for(let i = 0; i < arr.length; i++){
//         const current = arr[i];
//         if(current > 0){
//             positiveArr.push(current);
//         }
//     }
//     if(positiveArr.length > 0){
//         return positiveArr;
//     } else {
//         return null;
//     }
//
// }
// const arr1 = [1,2,3,4,5,-1,-2,-3,-4,-5];
// console.log(numPositiveOne(arr1));