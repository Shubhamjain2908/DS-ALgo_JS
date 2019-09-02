/**
 * Facebook
 * 
 * Given a list of numbers, where every number shows up twice except for one number, find that one number.
 * Example:
    Input: [4, 3, 2, 4, 1, 3, 2]
    Output: 1
    ^^Challenge: Find a way to do this using O(1) memory.
 */


/**
 * Using Hashing -> O(n) time complexity & O(n) space complexity
 * @param {Array} array 
 * @returns {Element} nonDuplicateElement
 */
const nonDuplicateHashing = (array) => {
    let obj = {};
    for (let i = 0; i < array.length; i++) {
        const e = array[i];
        if (obj[e]) {
            delete obj[e];
        } else {
            obj[e] = e;
        }
    }
    return Object.keys(obj)[0];
}

/**
 * Using XOR -> O(n) time complexity & O(1) space complexity
 *  a) XOR of a number with itself is 0.
    b) XOR of a number with 0 is number itself.
 * @param {Array} array 
 * @returns {Element} nonDuplicateElement
 */
const nonDuplicateXOR = (array) => {
    let x;
    for (let i = 0; i < array.length; i++) {
        const e = array[i];
        x = x ^ e;
    }
    return x;
}

const arr = [7, 3, 5, 4, 5, 3, 4];
const arr2 = [4, 3, 2, 4, 1, 3, 2];

console.log(nonDuplicateHashing(arr));
console.log(nonDuplicateHashing(arr2));

console.log(nonDuplicateXOR(arr));
console.log(nonDuplicateXOR(arr2));