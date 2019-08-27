/**
 * Twitter
 *
 * A palindrome is a sequence of characters that reads the same backwards and forwards.
 * Given a string, s, find the longest palindromic substring in s.
 *
 * Example:
    Input: "banana"
    Output: "anana"

    Input: "million"
    Output: "illi"
 */

const getPalinString = (str) => {
    let str2 = [...str].reverse().join('');
    return longestCommonSubsequence(str, str2);
}

const longestCommonSubsequence = (str1, str2) => {
    let arr1 = [...str1];
    let arr2 = [...str2];
    const m = arr1.length;
    const n = arr2.length;
    let dp = new Array(m + 1).fill(new Array(n + 1));
    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            if (i === 0 || j === 0) {
                dp[i][j] = 0;
            } else if (arr1[i - 1] === arr2[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    // Code to print the lcs
    let index = dp[m][n];
    let lcsArr = new Array(index + 1);
    lcs[index] = '';

    let i = m, j = n;
    while (i > 0 && j > 0) {
        if (arr1[i - 1] == arr2[j - 1]) {
            lcsArr[index - 1] = arr1[i - 1];
            i--;
            j--;
            index--;
        }
        else if (dp[i - 1][j] > dp[i][j - 1])
            i--;
        else
            j--;
    }

    return lcsArr.join('');
}

// LCS using recursion
const lcs = (arr1, arr2, m, n) => {
    if (m === 0 || n === 0) {
        return 0;
    } else if (arr1[m - 1] === arr2[n - 1]) {
        return 1 + lcs(arr1, arr2, m - 1, n - 1);
    } else {
        return Math.max(lcs(arr1, arr2, m - 1, n), lcs(arr1, arr2, m, n - 1))
    }
}

const str1 = 'banana';
const str2 = 'million';
console.log(getPalinString(str1));
console.log(getPalinString(str2));