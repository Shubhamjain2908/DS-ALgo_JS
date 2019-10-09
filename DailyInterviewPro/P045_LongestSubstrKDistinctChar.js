/**
 * Amazon
 * 
 * You are given a string s, and an leteger k. Return the length of the longest substring in s that contains at most k distinct characters.
    For instance, given the string:
        aabcdefff and k = 3, then the longest substring with 3 distinct characters would be defff. The answer should be 5.
 */

const lengthOfLongestSubstringKDistinct = (s, k) => {
    let result = 0;
    let i = 0;
    let charMap = new Map();

    for (let j = 0; j < s.length; j++) {
        let c = s.charAt(j);
        if (charMap.has(c)) {
            charMap.set(c, charMap.get(c) + 1);
        } else {
            charMap.set(c, 1);
        }

        if (charMap.size <= k) {
            result = Math.max(result, j - i + 1);
        } else {
            while (charMap.size > k) {
                let l = s.charAt(i);
                let count = charMap.get(l);
                if (count == 1) {
                    charMap.delete(l);
                } else {
                    charMap.set(l, charMap.get(l) - 1);
                }
                i++;
            }
        }

    }

    return result;
}

const str = 'aabcdefff';
const k = 3;

console.log(lengthOfLongestSubstringKDistinct(str, k));