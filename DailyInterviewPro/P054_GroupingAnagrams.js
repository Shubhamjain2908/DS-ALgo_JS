/**
 * AirBNB
 * 
 * Given a list of words, group the words that are anagrams of each other. (An anagram are words made up of the same letters).
Example:
    Input: ['abc', 'bcd', 'cba', 'cbd', 'efg']
    Output: [['abc', 'cba'], ['bcd', 'cbd'], ['efg']]
 */

/**
 * Utility function to check whether 2 strings are anagrams of each other
 * @param {String} A 
 * @param {String} B 
 * @returns {boolean} isAnagram
 */
const checkAnagram = (A, B) => {
    let charMap = new Map();
    for (const key of A) {
        if (charMap.has(key)) {
            charMap.set(key, charMap.get(key) + 1);
        } else {
            charMap.set(key, 1);
        }
    }
    for (const key of B) {
        if (charMap.has(key)) {
            let value = charMap.get(key);
            charMap.set(key, value - 1);
            if (value === 1) {
                charMap.delete(key);
            }
        } else {
            return false;
        }
    }
    return !charMap.size;
}

/**
 * Program to group the words that are anagrams of each other
 * @param {Array} words
 * @returns {Array} groupedArrays
 */
const groupAnagrams = words => {
    const len = words.length;
    let visited = new Array(len).fill(false);
    let result = [];
    for (let i = 0; i < len; i++) {
        const e = words[i];
        let temp = [];
        if (!visited[i]) {
            visited[i] = true;
            temp.push(e);
        }
        for (let j = 0; j < len; j++) {
            const f = words[j];
            if (!visited[j] && checkAnagram(e, f)) {
                visited[j] = true;
                temp.push(f);
            }
        }
        temp.length ? result.push(temp) : '';
    }
    return result;
}

const words = ['abc', 'bcd', 'cba', 'cbd', 'efg'];
console.log(groupAnagrams(words));