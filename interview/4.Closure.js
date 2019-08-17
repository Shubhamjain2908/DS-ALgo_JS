/**
 * A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.
 */

var counter = 0;
const add1 = (() => () => counter += 1)();

add1();
add1();
add1();

console.log(counter);

const getSecret = (secret) => {
    return {
        get: () => secret
    };
};

const secret = msg => () => msg;

console.log(getSecret(82).get());
console.log(secret('Shubham')());

const partialApply = (fn, ...fixedArgs) => {
    return function (...remainingArgs) {
        return fn.apply(this, fixedArgs.concat(remainingArgs));
    };
};
const add = (a, b) => a + b;
const add10 = partialApply(add, 10);
console.log(add10(5));

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx//

/**
 * A closure is an inner function that has access to the scope of an enclosing function.
 */

const globalVariable = 'global var';

function outterFunc(param1) {
    const variable1 = 'var one';

    function innerFunc(param2) {
        const variable2 = 'var two';

        console.log('globalVariable', globalVariable);
        console.log('variable1', variable1);
        console.log('variable2', variable2);
        console.log('param1', param1);
        console.log('param2', param2);
    }

    innerFunc('param two');
}

outterFunc('param one');