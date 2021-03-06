/**
 * LinkedIn
 *
 * Given a non-empty array where each element represents a digit of a non-negative integer, add one to the integer.
 * The most significant digit is at the front of the array and each element in the array contains only one digit.
 * Furthermore, the integer does not have leading zeros, except in the case of the number '0'.

    Example:
        Input: [2,3,4]
        Output: [2,3,5]

        Input: [2,9,9]
        Output: [3,0,0]
 */

const plusOne = N => {
    return [...(+N.join('') + 1) + ''];
}

const N = [2, 3, 4];
console.log(plusOne(N));

const N2 = [2, 9, 9];
console.log(plusOne(N2));