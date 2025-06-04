'use strict';

// We ask the user for the number of hours:

let hours = prompt('Enter the number of hours');

// We convert the entered value into a number:

hours = Number(hours);

//Calculate the number of second - 1 hours = 3600 seconds:
let seconds = hours * 3600;

// Infers the result:
alert(`At ${hours} o'clock there are ${seconds} seconds `);
