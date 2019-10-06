/**
 * Facebook
 * 
 * You are given an array of integers. Return the smallest positive integer that is not present in the array. The array may contain duplicate entries.
    For example, the input [3, 4, -1, 1] should return 2 because it is the smallest positive integer that doesn't exist in the array.
    ^^^Your solution should run in linear time and use constant space.
 */


/**
 * Utility function that puts all non-positive (0 and negative) numbers on left side of arr[] and return count of such numbers
 * @param {Array} arr 
 * @param {Number} size 
 */
const segregate = (arr, size) => {
    let j = 0, i;
    for (i = 0; i < size; i++) {
        if (arr[i] <= 0) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            // increment count of non-positive integers 
            j++;
        }
    }
    return j;
}

/**
 * Find the smallest positive missing number in an array that contains all positive integers
 * @param {Array} arr 
 * @param {Number} size 
 */
const findMissingPositive = (arr, size) => {
    let i;

    // Mark arr[i] as visited by making arr[arr[i] - 1] negative. 
    // Note that 1 is subtracted because index start from 0 and positive numbers start from 1 
    for (i = 0; i < size; i++) {
        let x = Math.abs(arr[i]);
        if (x - 1 < size && arr[x - 1] > 0)
            arr[x - 1] = -arr[x - 1];
    }

    // Return the first index value at which is positive 
    for (i = 0; i < size; i++)
        if (arr[i] > 0)
            return i + 1; // 1 is added becuase indexes start from 0 

    return size + 1;
}

/**
 * Find the smallest positive missing number in an array that contains both positive and negative integers
 * @param {Array} arr  
 */
const findMissing = (arr) => {
    const len = arr.length;
    // First separate positive and negative numbers 
    let shift = segregate(arr, len);
    return findMissingPositive(arr.splice(shift), len - shift);
}

const arr = [3, 4, -1, 1];
console.log(findMissing(arr));