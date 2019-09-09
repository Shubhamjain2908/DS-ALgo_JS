/**
 * Uber
 * 
 * Given a list of numbers, find if there exists a pythagorean triplet in that list. 
 * A pythagorean triplet is 3 variables a, b, c where a^2 + b^2 = c^2
 * 
 * Example:
    Input: [3, 5, 12, 5, 13]
    Output: True
    Here, 5^2 + 12^2 = 13^2.
 */

/**
 * Hashing -> O(n^2) time
 * @param {Array} list 
 * @returns {boolean} isPyth 
 */
const isPythagorean = (list) => {
    let listMap = new Map();
    let newList = list.map(a => {
        const v = a * a;
        listMap.set(v, true);
        return v;
    });
    for (let i = 0; i < newList.length; i++) {
        const e = newList[i];
        for (let j = 0; j < newList.length && j !== i; j++) {
            if (listMap.has(e - newList[j])) {
                return true;
            }
        }
    }
    return false;
}

/**
 * Using Sorting -> O(n^2) time
 * @param {Array} list 
 * @returns {boolean} isPyth 
 */
const isPythagoreanSorting = (list) => {
    let newList = list.map(a => a * a);
    const n = list.length;
    newList.sort((a, b) => a - b);
    for (let i = n - 1; i >= 2; i--) {
        let l = 0;
        let r = i - 1;
        while (l < r) {
            if (newList[l] + newList[r] === newList[i]) {
                return true;
            }
            if (newList[l] + newList[r] < newList[i]) {
                l++;
            }
            else {
                r--;
            }
        }
    }
    return false;
}

const list = [3, 5, 12, 5, 13];

console.log(isPythagorean(list));
console.log(isPythagoreanSorting(list));