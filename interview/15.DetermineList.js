/**
 * Q1. list2 => as 
 * 1. If data is a primitive data like no. or string it is 
 * always passed as data by value.
 * 2. If data is a non-primitive data like array it is 
 * passed as data by reference.
 */
let list1 = [1, 2, 3, 4, 5];
const list2 = list1;    // passing data by reference
list1.push(6, 7, 8);
list1 = [900, 928, 8771, 983];

console.log(list2); // 1,2,3,4,5,6,7,8
console.log(list1); // 900, 928, 8771, 983

let a = 90;
let b = a;
a = 123;
console.log(a, b);

// Making copy of array
const arr1 = [1, 2, 3, 4, 5];
// const arr2 = arr1.slice();
const arr2 = arr1.concat([]);

arr1.push(6, 7, 8);

console.log('Arr1 => ', arr1);
console.log('Arr2 => ', arr2);