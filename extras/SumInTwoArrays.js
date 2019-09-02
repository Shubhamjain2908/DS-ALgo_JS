/**
 * Given two sorted arrays & a value. Find whether sum of 1 element of array adds upto K.
 * O(n + m) time complexity & O(1) space complexity
 * @param {Sorted Array} arr1 
 * @param {Sorted Array} arr2 
 * @param {Sum} k
 * @returns {Boolean} sumPresent 
 */
const isSumPresent = (arr1, arr2, k) => {
    let first = 0;
    let second = arr2.length - 1;
    while (first < arr1.length && second > 0) {
        const sum = arr1[first] + arr2[second];
        if (sum === k) {
            return true;
        } else if (sum < k) {
            first++;
        } else {
            second--;
        }
    }
    return false;
}

const arr1 = [1, 2, 3, 4, 5, 7, 9];
const arr2 = [0, 3, 7, 8, 10];
const sum = 14;
console.log(isSumPresent(arr1, arr2, sum))