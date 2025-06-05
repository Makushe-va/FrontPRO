'use strict';

// We ask the user for the number of hours:

const hours = +prompt('Enter the number of hours');

//Calculate the number of second - 1 hours = 3600 seconds:
const seconds = hours * 3600;

// Infers the result:
alert(`At ${hours} o'clock there are ${seconds} seconds `);
