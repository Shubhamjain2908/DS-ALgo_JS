/**
 * Twitter
 * 
 * Given an array, nums, of n integers, find all unique triplets (three numbers, a, b, & c) in nums such that a + b + c = 0. 
 * Note that there may not be any triplets that sum to zero in nums, and that the triplets must not be duplicates.

    Example: 
        Input: nums = [0, -1, 2, -3, 1]
        Output: [0, -1, 1], [2, -3, 1]

 */

/**
 * Using Hashing - O(n^2) time complexity & O(n) space complexity
 * @param {Array} arr
 * @returns {Array} result 
 */
const threeSum = (arr) => {
    let result = [];
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let s = new Set();
        for (let j = i + 1; j < n; j++) {
            let x = -(arr[i] + arr[j]);
            s.has(x) ? result.push([x, arr[i], arr[j]]) : s.add(arr[j]);
        }
    }
    return result;
}

/**
  * Using Sorting - O(n^2) time complexity & O(1) space complexity
  * @param {Array} arr
  * @returns {Array} result 
  */
const threeSum2 = (arr) => {
    let result = [];
    const n = arr.length;
    arr.sort((a, b) => a - b);
    for (let i = 0; i < n - 1; i++) {
        // initialize left and right 
        let l = i + 1, r = n - 1, x = arr[i];
        while (l < r) {
            if (x + arr[l] + arr[r] == 0) {
                result.push([x, arr[l], arr[r]]);
                l++;
                r--;
            }
            // If sum of three elements is less than zero then increment in left 
            else if (x + arr[l] + arr[r] < 0) {
                l++;
            }
            // if sum is greater than zero than 
            // decrement in right side 
            else {
                r--;
            }
        }
    }
    return result;
}

const nums = [0, -1, 2, -3, 1];
console.log(threeSum(nums));    // [[0, -1, 1], [2, -3, 1]]
console.log(threeSum2(nums));    // [[0, -1, 1], [2, -3, 1]]

const nums2 = [1, -2, 1, 0, 5];
console.log(threeSum(nums2));    // [[-2, 1, 1]]
console.log(threeSum2(nums2));    // [[-2, 1, 1]]