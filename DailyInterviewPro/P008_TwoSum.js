/**
 * Facebook
 *
 * You are given a list of numbers, and a target number k.
 * Return whether or not there are two numbers in the list that add up to k.
Example:
    Given [4, 7, 1 , -3, 2] and k = 5,
    return true since 4 + 1 = 5.
 */


const twoSum = (array, k) => {
    let map = new Map();
    for (let i = 0; i < array.length; i++) {
        const e = array[i];
        map.set(e, i);
        if (map.has(k - e)) {
            return true;
        }
    }
    return false;
};

const arr = [4, 7, 1, -3, 2];
const k = 8;
console.log(twoSum(arr, k));    // true