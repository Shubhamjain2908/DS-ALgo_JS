// An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined
// Used to provide private scope inside our function
(() => {
    var x = 20;
    var y = 20;
    var answer = x + y;
    console.log(answer);
})();

((name) => {
    console.log(`Hello ${name}!!!`);
})('Shubham');