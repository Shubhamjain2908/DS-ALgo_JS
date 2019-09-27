/**
 * Microsoft
 *
 * You are given an array of integers. Return the largest product that can be made by multiplying any 3 integers in the array.
    Example:
    [-4, -4, 2, 8] should return 128 as the largest product can be made by multiplying -4 * -4 * 8 = 128.
 */

const tripletProduct = (arr) => {
    let max = arr[0], secondMax = thirdMax = Number.MIN_SAFE_INTEGER, min = secondMin = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < arr.length; i++) {
        const e = arr[i];
        if (e > max) {
            thirdMax = secondMax;
            secondMax = max;
            max = e;
        } else if (e > secondMax) {
            thirdMax = secondMax;
            secondMax = e;
        } else if (e > thirdMax) {
            thirdMax = e;
        }
        if (e < min) {
            secondMin = min;
            min = e;
        } else if (e < secondMin) {
            secondMin = e;
        }
    }
    return Math.max(max * secondMax * thirdMax, max * min * secondMin);
}

const arr = [-4, -4, 2, 8];
console.log(tripletProduct(arr));