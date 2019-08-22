var x = 10;

// This is the reason why we should use ES6 syntax of function expression instead of function declaration
function y() {
    // Here hoisting occurs of function declaration
    // function x() {} // Internally function comes at top;
    x = 100;
    // console.log('Func X: ', x); // 100
    return;
    function x() {
    }
}
y();

console.log(x);

function z() {
    return 3333;
}
z = 232;
console.log(z); // 232
// console.log(z()); // throws an error: TypeError: z is not a function