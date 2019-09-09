/**
 * Linkedin
 * 
 * You are given a positive integer N which represents the number of steps in a staircase.
 * You can either climb 1 or 2 steps at a time. Write a function that returns the number of unique ways to climb the stairs.
 * 
 * ^^Can you find a solution in O(n) time?
 */

/**
 * Not efficient 
 * @param {Number} n 
 */
const noOfStairs = (n) => {
    if (n < 1) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else if (n === 2) {
        return 2;
    }
    return noOfStairs(n - 1) + noOfStairs(n - 2);
}

/**
 * Using Dynamic programming - O(n) time complexity
 * @param {Number} n 
 */
const noOfStairsDP = (n) => {
    let dp = new Array(n + 1);
    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 2;
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}

const n1 = 4;   // 5
const n2 = 5;   // 8

console.log(noOfStairs(n1));
console.log(noOfStairs(n2));

console.log(noOfStairsDP(n1));
console.log(noOfStairsDP(n2));