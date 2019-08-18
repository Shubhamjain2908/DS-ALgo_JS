/**
 * Problem
 *  - Write a func that keeps track of how many times it was called & returns that number
 * - All functionality should be inside of the function - none outside
 */
function myFunc() {
    let count = 0;

    return () => count += 1;

    // // An anonymus function 
    // return function () { // Closure
    //     count++;
    //     return count;
    // }
}

const instanceOne = myFunc();
const instanceTwo = myFunc();

console.log('instanceOne: ', instanceOne());
console.log('instanceOne: ', instanceOne());
console.log('instanceOne: ', instanceOne());
console.log('instanceTwo: ', instanceTwo());
console.log('instanceTwo: ', instanceTwo());
console.log('instanceOne: ', instanceOne());

// console.log(myFunc());  // return 1
// console.log(myFunc());  // return 2
// console.log(myFunc());  // return 3