/**
 * Twitter
 * 
 * You are given an array of integers. Find the maximum sum of all possible contiguous subarrays of the array.
    Example:
    [34, -50, 42, 14, -5, 86]
    Given this input array, the output should be 137. The contiguous subarray with the largest sum is [42, 14, -5, 86].
    ^^^Your solution should run in linear time.
 */

const maxContigSum = (array) => {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        max = Math.max(array[i], max + array[i]);
    }
    return max;
}

const arr = [34, -50, 42, 14, -5, 86];
console.log(maxContigSum(arr));