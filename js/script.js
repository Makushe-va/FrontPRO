'use strict';

const apply = function(func, ctx, argsArray) {
    ctx.func = func;

    let result;
    if (argsArray) {
        result = ctx.func(...argsArray);
    } else {
        result = ctx.func();
    }

    delete ctx.func;
    return result;
};
function showInfo(city, country) {
    console.log(`${this.name} from ${city}, ${country}`);
}

const user1 = { name: 'Alice' };

apply(showInfo, user1, ['Odessa', 'Ukraine']);




const bind = function(func, ctx, ...bindArgs) {
    return function(...callArgs) {
        ctx.func = func;
        const result = ctx.func(...bindArgs, ...callArgs);
        delete ctx.func;
        return result;
    };
};

function say(greeting, punctuation) {
    console.log(greeting + ', ' + this.name + punctuation);
}

const user2 = {
    name: 'John Smith',
};

const boundSay = bind(say, user2, 'Hello');

boundSay('!');
