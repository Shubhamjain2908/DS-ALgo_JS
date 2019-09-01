/**
 * Using temp array - O(n) time & O(d) space complexity 
 * @param {Array} arr 
 * @param {Shifted Param} d
 * @returns {Array} rotatedArray 
 */
const rotateArr = (arr, d) => {
    let rArr = [];
    for (let i = d; i < arr.length; i++) {
        const e = arr[i];
        rArr.push(e);
    }
    for (let i = 0; i < d; i++) {
        const e = arr[i];
        rArr.push(e);
    }
    return rArr;
}

const arr = [1, 2, 3, 4, 5, 6, 7];
const d = 2;
console.log(rotateArr(arr, d)); // [3, 4, 5, 6, 7, 1, 2]