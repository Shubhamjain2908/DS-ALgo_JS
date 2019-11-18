/**
 * Apple
 * 
 * Given an array of integers, arr, where all numbers occur twice except one number which occurs once, find the number.
 * Your solution should ideally be O(n) time and use constant extra space. 
    Example:
        Input: arr = [7, 3, 5, 5, 4, 3, 4, 8, 8]
        Output: 7
 */

const findSingleElem = arr => {
    const len = arr.length;
    let ans = arr[0];
    for (let i = 1; i < len; i++) {
        ans ^= arr[i];
    }
    return ans;
}

const arr = [7, 3, 5, 5, 4, 3, 4, 8, 8];
console.log(findSingleElem(arr));