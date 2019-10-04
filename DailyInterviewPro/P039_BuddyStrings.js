/**
 * AirBNB
 *
 * Given two strings A and B of lowercase letters, return true if and only if we can swap two letters in A so that the result equals B.

    Example 1:
        Input: A = "ab", B = "ba"
        Output: true

    Example 2:
        Input: A = "ab", B = "ab"
        Output: false

    Example 3:
        Input: A = "aa", B = "aa"
        Output: true
        
    Example 4:
        Input: A = "aaaaaaabc", B = "aaaaaaacb"
        Output: true

    Example 5:
        Input: A = "", B = "aa"
        Output: false
 */

const isBuddy = (A, B) => {
    const len = A.length;
    if (len !== B.length) {
        return false;
    } else if (A === B) {
        let count = new Array(26).fill(0);
        for (let i = 0; i < len; ++i) {
            count[A.charAt(i).charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
        for (const c of count) {
            if (c > 1) return true;
        }
        return false;
    } else {
        let prev = -1, curr = -1, count = 0;
        for (let i = 0; i < len; i++) {
            if (A.charAt(i) !== B.charAt(i)) {
                count++;
                if (count > 2) {
                    return false;
                }
                prev = curr;
                curr = i;
            }
        }
        return (count === 2 && A.charAt(prev) === B.charAt(curr) && A.charAt(curr) === B.charAt(prev));
    }
}

console.log(isBuddy('ab', 'ba'));   // true
console.log(isBuddy('ab', 'ab'));   // false
console.log(isBuddy('aa', 'aa'));   // true
console.log(isBuddy('aaaaaaabc', 'aaaaaaacb'));   // true
console.log(isBuddy('aaaaaabbc', 'aaaaaaacb'));   // false
console.log(isBuddy('', 'aa'));   // false
console.log(isBuddy('acccccb', 'bccccca'));   // true