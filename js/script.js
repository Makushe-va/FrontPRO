'use strict';

function findValuesByKey(obj, targetKey) {
    const results = [];
    const queue = [obj];

    while (queue.length > 0) {
        const current = queue.shift();

        if (Array.isArray(current)) {
            for (const item of current) {
                queue.push(item);
            }
        } else if (current && typeof current === 'object') {
            for (const key in current) {
                if (key === targetKey) {
                    results.push(current[key]);
                }
                queue.push(current[key]);
            }
        }
    }

    return results;
}

const data = {
    id: 1,
    name: "root",
    meta: {
        id: 2,
        parent: {
            id: 3,
            name: "leaf",
        },
    },
    array: [
        { id: 4 },
        { name: "node", children: [{ id: 5 }] },
    ],
};

console.log(findValuesByKey(data, "id"));