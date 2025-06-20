'use strict';

function padString(str, num, symbol, left = true) {
    if( typeof str !== 'string' ) throw new Error('this argument must be a string');
    if (typeof num !== 'number') throw new Error('this argument must be a number');
    if (typeof symbol !== 'string' || symbol.length !==1) throw new Error('this argument must be a string of length 1');
    if (typeof left !== 'boolean') throw new Error('this argument must be a boolean(true or false)');
    if (num < str.length){
        return str.substr(0, num);
    }
    const symbolToAdd = num - str.length;
    let padding = '';
    for (let i = 0; i<symbolToAdd; i++) {
        padding += symbol;
    }
    if (left){
        return str + padding;
    } else {
        return padding+str;
    }
}

console.log(padString('hello',8,'$'));
console.log(padString('hello',6,'$', false));
console.log(padString('hello',1,));
console.log(padString('hello',5,'$'))

