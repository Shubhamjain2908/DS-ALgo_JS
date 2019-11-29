/**
 * Amazon
 * 
 * You are given an array of integers, and an integer K. Return the subarray which sums to K. You can assume that a solution will always exist.
 * 
    Input: arr = [1, 3, 2, 5, 7, 2], k = 14
    Output:  [2, 5, 7]
 */

const arrSum = (array, k) => {
    for (let i = 0; i < array.length; i++) {
        let temp = [];
        let sum = 0;
        for (let j = i; j < array.length; j++) {
            sum = sum + array[j];
            temp.push(array[j]);
            if (sum === k) {
                return temp;
            }
        }
    }
}

const arr = [1, 3, 2, 5, 7, 2], k = 14;
console.log(arrSum(arr, k));    // [2, 5, 7]