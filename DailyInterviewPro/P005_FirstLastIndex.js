/**
 * Airbnb
 * 
 * Given a sorted array, A, with possibly duplicated elements, find the indices of the first and last occurrences of a target element, x.
 *  Return -1 if the target is not found.
 * 
 * Example:
    Input: A = [1,3,3,5,7,8,9,9,9,15], target = 9
    Output: [6,8]

    Input: A = [100, 150, 150, 153], target = 150
    Output: [1,2]

    Input: A = [1,2,3,4,5,6,10], target = 9
    Output: [-1, -1]
 */

/**
 * O(n) time complexity & O(1) space complexity
 * @param {Sorted Array} arr 
 * @param {Key} x 
 * @returns {array} indices
 */
const indices = (arr, x) => {
    let first = -1;
    let last = -1;
    for (let i = 0; i < arr.length; i++) {
        if (x === arr[i]) {
            if (first === -1) {
                first = i;
            } else {
                last = i;
            }
        }
    }
    return [first, last];
}

const first = (arr, x, low, high) => {
    if (high >= low) {
        let mid = low + Math.floor((high - low) / 2);
        if ((mid === 0 || x > arr[mid - 1]) && arr[mid] === x) {
            return mid;
        } else if (x > arr[mid]) {
            return first(arr, x, mid + 1, high);
        } else {
            return first(arr, x, low, mid - 1);
        }
    } else {
        return -1;
    }
}

const last = (arr, x, low, high) => {
    if (high >= low) {
        let mid = low + Math.floor((high - low) / 2);
        if ((mid === arr.length - 1 || x < arr[mid + 1]) && arr[mid] == x) {
            return mid;
        } else if (x < arr[mid]) {
            return last(arr, x, low, mid - 1);
        } else {
            return last(arr, x, mid + 1, high);
        }
    } else {
        return -1;
    }
}

/**
 * O(logn) time complexity & O(1) space complexity
 * @param {Sorted Array} arr 
 * @param {Target value} x 
 */
const indicesBinarySearch = (arr, x) => {
    const len = arr.length;
    const start = first(arr, x, 0, len - 1);
    const end = last(arr, x, 0, len - 1);
    return [start, end]
}

const arr = [1, 2, 2, 2, 2, 3, 4, 7, 8, 8];
const x = 2;

console.log(indicesBinarySearch(arr, x));   // [1, 4]

console.log(indicesBinarySearch([1, 3, 3, 5, 7, 8, 9, 9, 9, 15], 9));   // [6, 8]
console.log(indicesBinarySearch([100, 150, 150, 153], 150));    // [1, 2]
console.log(indicesBinarySearch([1, 2, 3, 4, 5, 6, 10], 9));    // [-1, -1]

// console.log(binarySearch(arr, x), counter);