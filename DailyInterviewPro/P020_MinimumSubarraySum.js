/**
 * Amazon
 *
 * Given an array of n positive integers and a positive integer s, find the minimal length of a contiguous subarray of which the sum is s.
 *  If there isn't one, return 0 instead.
    Example:
    Input: s = 7, nums = [2,3,1,2,4,3]
    Output: 2
    Explanation: the subarray [4,3] has the minimal length under the problem constraint.
 */

/**
 * Minimum Size Subarray Sum
 * @param {Array} array 
 * @param {Number} sum 
 * @returns {Number} minLength
 */
const minSubarrSum = (array, sum) => {
    const n = array.length;
    let currentSum = array[0], start = 0;
    let minLength = n;
    for (let i = 1; i <= n; i++) {
        while (currentSum > sum && start < i - 1) {
            currentSum -= array[start];
            start++;
        }
        if (currentSum === sum) {
            if (minLength > i - start) {
                minLength = i - start;
            }
        }
        if (i < n) {
            currentSum += array[i];
        }
    }
    return minLength;
}

const nums = [2, 3, 1, 2, 4, 3];
const s = 7;
console.log(minSubarrSum(nums, s));