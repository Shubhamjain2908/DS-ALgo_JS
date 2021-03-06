/**
 * 1. Single argument(number) => returns empty array of that length.
 * 
 * 2. Single argument(non-number) => returns array with just that argument passed as an element
 * 
 * 3. Multiple arguments passed => returns new array with all arguments passed in as elements in it.
 */

var arr1 = [];
var arr2 = new Array(50);
var arr3 = new Array(1, 2, "three", 4, "five");
var arr4 = new Array([1, 2, 3, 4, 5]);

console.log('arr1 => ', arr1);  // []
console.log('arr2 => ', arr2);  // [..50 items..]
console.log('arr3 => ', arr3);  // [1, 2, "three", 4, "five"]
console.log('arr4 => ', arr4);  // [[1, 2, 3, 4, 5]]