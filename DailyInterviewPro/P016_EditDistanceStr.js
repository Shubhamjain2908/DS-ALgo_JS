/**
 * Airbnb
 * 
 * Given two strings, determine the edit distance between them. 
 * The edit distance is defined as the minimum number of edits (insertion, deletion, or substitution) needed to change one string to the other.
    For example, "biting" and "sitting" have an edit distance of 2 (substitute b for s, and insert a t).
 */

const lcs = (str1, str2) => {
    str1 = [...str1];
    str2 = [...str2];
    const m = str1.length;
    const n = str2.length;
    let L = new Array(m + 1).fill(new Array(n + 1));
    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            if (i == 0 || j == 0) {
                L[i][j] = 0;
            } else if (str1[i - 1] == str2[j - 1]) {
                L[i][j] = L[i - 1][j - 1] + 1;
            } else {
                L[i][j] = Math.max(L[i - 1][j], L[i][j - 1]);
            }
        }
    }
    return L[m][n];
}

const editDistance = (str1, str2) => {
    // str1 = [...str1];
    // str2 = [...str2];
    const m = str1.length;
    const n = str2.length;
    // let dp = new Array(n + 1).fill(new Array(m + 1));

    // for (let i = 0; i < m + 1; i++) {
    //     dp[0][i] = i;
    // }

    // for (let i = 0; i < n + 1; i++) {
    //     dp[i][0] = i;
    // }

    // for (let i = 1; i <= str1.length; i++) {
    //     for (let j = 1; j <= str2.length; j++) {
    //         if (str1[i - 1] == str2[j - 1]) {
    //             dp[i][j] = dp[i - 1][j - 1];
    //         } else {
    //             dp[i][j] = 1 + Math.min(dp[i - 1][j - 1], Math.min(dp[i - 1][j], dp[i][j - 1]));
    //         }
    //     }
    // }
    // console.log(dp);
    const l = lcs(str1, str2);
    return (m - l) + (n - l);
}

const a = 'biting';
const b = 'sitting';

console.log(editDistance(a, b));