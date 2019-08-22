var num = 50;

// Hoisting inside a function
function logNumber() {
    // var num; // under the hood num gets hoisted to the top of the function
    console.log(num);   // undefined (if let then error will be thrown)
    var num = 100;
}

logNumber();