'use strict';

//We create a function with length and characters arguments.
//In the function, we create a change for the key.
//Using a loop, we generate a random value and add it to the key
function generateKey (length, character ) {
    let key = '';
    for (let i = 0; i < length; i++) {
        const randomNum = Math.floor(Math.random() * characters.length);
        key += character[randomNum];
    }
    return key;
}

const characters = 'qwerty123456789qwerty987654321';
const key = generateKey(6, characters);
console.log(key);