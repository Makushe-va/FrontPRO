"use strict";

function filterUniqueByReference(arr) {
    const seen = new Set();
    const result = [];

    for (const obj of arr) {
        if (!seen.has(obj)) {
            seen.add(obj);
            result.push(obj);
        }
    }

    return result;
}

// usage example:
const obj1 = { name: "a" };
const obj2 = { name: "a" };

const input = [obj1, obj1, obj2, obj2, obj1];

const result = filterUniqueByReference(input);

console.log(result);
