/**
 * Given an array of positive numbers, find the maximum sum of a subsequence with the constraint that no 2 numbers in the sequence should be adjacent in the array
 * 
 * Example: 
        Input : arr = [5, 5, 10, 100, 10, 5]
        Output : 110

        Input : arr = [1, 2, 3]
        Output : 4

        Input : arr = [1, 20, 3]
        Output : 20
 */

/**
 * DP => O(n) time complexity & O(n) space complexity
 * @param {Array} arr 
 * @returns {Number} maxSum
 */
const maxAdjacentSum = (arr) => {
    const N = arr.length;
    let dp = new Array(N);
    dp[0] = arr[0];
    dp[1] = Math.max(arr[0], arr[1]);
    for (let i = 2; i < N; i++) {
        dp[i] = Math.max(dp[i - 1], arr[i] + dp[i - 2]);
    }
    return dp[N - 1];
}

/**
 * DP => O(n) time complexity & O(1) space complexity
 * @param {Array} arr 
 * @returns {Number} maxSum
 */
const maxAdjacentSum2 = (arr) => {
    const N = arr.length;
    let prev2Sum = arr[0];
    let prevSum = arr[1];
    let maxSum = Math.max(prevSum, prev2Sum);
    for (let i = 2; i < N; i++) {
        maxSum = Math.max(prevSum, arr[i] + prev2Sum);
        prev2Sum = prevSum;
        prevSum = maxSum;
    }
    return maxSum;
}

const arr = [5, 5, 10, 100, 10, 5];
console.log(maxAdjacentSum2(arr));   // 110

const arr2 = [1, 2, 3];
console.log(maxAdjacentSum2(arr2));  // 4

const arr3 = [1, 20, 3];
console.log(maxAdjacentSum2(arr3));  // 20

const arr4 = [5, 1, 1, 5];
console.log(maxAdjacentSum2(arr4));  // 10

const arr5 = [1, 2, 3, 4, 5, 6];
console.log(maxAdjacentSum2(arr5));  // 12