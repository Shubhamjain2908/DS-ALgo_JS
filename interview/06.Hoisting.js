/**
 * Variables & functions ore hoisted to the top of the 
 * top of the scope that they are declared in.
 */


console.log(typeof a);  // undefined
var a;

// console.log(typeof a);  // throw an error
let b;

console.log('Value will be of global/function scope');
for (var i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log('var => ', i);
    }, 500);
}

console.log('Value will be of block scope');
for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log('let => ', i);
    }, 500);
}

var cc = () => {
    console.log('functional expression: It does not supports hoisting');
}
cc();

tt();
function tt() {
    console.log('functional declaration: It supports hoisting');
}

// let & const does not supports hoisting on global scope