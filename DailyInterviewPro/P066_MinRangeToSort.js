/**
 * Twitter
 * 
 * Given a list of integers, return the bounds of the minimum range that must be sorted so that the whole list would be sorted.

    Example:
        Input: [1, 7, 9, 5, 7, 8, 10]
        Output: (1, 5)
 */

// const getMinRange = array => {
//     const len = array.length;
//     let tempArr = [...array].sort((a, b) => a - b);
//     let start, end;
//     for (let i = 0; i < len; i++) {
//         if (array[i] !== tempArr[i]) {
//             if (!start && start !== 0) {
//                 start = i;
//             }
//         } else {
//             end = i - 1;
//         }
//     }
//     return [start, end];
// }

/**
 * Solution:
    1) Find the candidate unsorted subarray
    2) Check whether sorting the candidate unsorted subarray makes the complete array sorted or not. If not, then include more elements in the subarray.
 * @param {Array} arr
 */
const printUnsorted = (arr) => {
    let s = 0, n = arr.length, e = n - 1, i, max, min;

    // first element which is greater than the next element
    for (s = 0; s < n - 1; s++) {
        if (arr[s] > arr[s + 1])
            break;
    }
    if (s == n - 1) {
        console.log('The complete array is sorted');
        return [];
    }

    // first element (first in right to left order) which is smaller than the next element
    for (e = n - 1; e > 0; e--) {
        if (arr[e] < arr[e - 1])
            break;
    }

    // Find the minimum and maximum values in arr[s..e]
    max = arr[s]; min = arr[s];
    for (i = s + 1; i <= e; i++) {
        if (arr[i] > max)
            max = arr[i];
        if (arr[i] < min)
            min = arr[i];
    }

    // Find the first element (if there is any) in arr[0..s-1] which is greater than min, change s to index of this element.
    for (i = 0; i < s; i++) {
        if (arr[i] > min) {
            s = i;
            break;
        }
    }

    // Find the last element (if there is any) in arr[e+1..n-1] which is smaller than max, change e to index of this element.
    for (i = n - 1; i >= e + 1; i--) {
        if (arr[i] < max) {
            e = i;
            break;
        }
    }

    return [s, e];
}

const arr = [1, 7, 9, 5, 7, 8, 10];
console.log(printUnsorted(arr));

const arr2 = [10, 12, 20, 30, 25, 40, 32, 31, 35, 50, 60];
console.log(printUnsorted(arr2));

const arr3 = [0, 1, 15, 25, 6, 7, 30, 40, 50];
console.log(printUnsorted(arr3));