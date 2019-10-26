/**
 * Microsoft
 * 
 * You are given an array of integers. Return the length of the longest increasing subsequence (not necessarily contiguous) in the array. 

    Example: [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15]
    The following input should return 6 since the longest increasing subsequence is 0, 2, 6, 9 , 11, 15.
 */


/**
 * Dynamic Programming is used to solve this question. DP equation is 
 * if(arr[i] > arr[j]) { dp[i] = max(dp[i], dp[j] + 1 }
 * Time complexity is O(n^2).
 * Space complexity is O(n)
 * @param {Array} array 
 * @returns {number} maxLen
 */
const lis = array => {
    const len = array.length;
    let dp = new Array(len).fill(1);
    let maxLen = 1;
    for (let i = 1; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (array[i] > array[j]) {
                dp[i] = Math.max(dp[j] + 1, dp[i]);
                maxLen = Math.max(maxLen, dp[i]);
            }
        }
    }
    return maxLen;
}

const arr = [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15];
console.log(lis(arr));

const arr2 = [3, 4, -1, 0, 6, 2, 3];
console.log(lis(arr2));

const arr3 = [2, 5, 1, 8, 3];
console.log(lis(arr3));

const arr4 = [-1, 3, 4, 5, 2, 2, 2, 2];
console.log(lis(arr4));