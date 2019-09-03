/**
 * Microsoft
 *
 * You are given an array of integers in an arbitrary order.
 * Return whether or not it is possible to make the array non-decreasing by modifying at most 1 element to any value.
 * We define an array is non-decreasing if array[i] <= array[i + 1] holds for every i (1 <= i < n).
    Example:
        [13, 4, 7] should return true, since we can modify 13 to any value 4 or less, to make it non-decreasing.
        [13, 4, 1] however, should return false, since there is no way to modify just one element to make the array non-decreasing.
 */

const isNonDecreasingArr = (array) => {
    let count = 0;
    for (let i = 0; i < array.length - 1; i++) {
        const e1 = array[i];
        const e2 = array[i + 1];
        if (e1 > e2) {
            count++;
            if (count > 1) {
                return false;
            }
        }
    }
    return true;
}

const arr1 = [13, 4, 7];    // true
const arr2 = [13, 4, 1];    // false
const arr3 = [5, 1, 3, 2, 5];   // false

console.log(isNonDecreasingArr(arr1));
console.log(isNonDecreasingArr(arr2));
console.log(isNonDecreasingArr(arr3));