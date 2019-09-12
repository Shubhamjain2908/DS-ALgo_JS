/**
 * Airbnb
 * 
 * Given two strings, determine the edit distance between them. 
 * The edit distance is defined as the minimum number of edits (insertion, deletion, or substitution) needed to change one string to the other.
    For example, "biting" and "sitting" have an edit distance of 2 (substitute b for s, and insert a t).
 */

const editDistance = (str1, str2) => {
    str1 = [...str1];
    str2 = [...str2];
    const m = str1.length;
    const n = str2.length;
    return editDistance_dp(str1, str2, m, n);
}

const editDistance_dp = (str1, str2, m, n) => {
    if (m === 0) {
        return n;
    }
    if (n === 0) {
        return m;
    }
    if (str1[m - 1] === str2[n - 1]) {
        return editDistance_dp(str1, str2, m - 1, n - 1);
    } else {
        return 1 + Math.min(editDistance_dp(str1, str2, m - 1, n - 1), Math.min(editDistance_dp(str1, str2, m, n - 1), editDistance_dp(str1, str2, m - 1, n)));
    }
}

const a = 'biting';
const b = 'sitting';

console.log(editDistance(a, b));