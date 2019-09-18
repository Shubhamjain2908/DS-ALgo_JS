/**
 * Merge Sort is a Divide and Conquer algorithm. It divides input array in two halves, calls itself for the two halves and then merges the two sorted halves. 
 * The merge() function is used for merging two halves. The merge(arr, l, m, r) is key process that assumes that 
 * arr[l..m] and arr[m+1..r] are sorted and merges the two sorted sub-arrays into one.
 * O(n*logn) time complexity & O(n) space complexity
 * @param {Array} array
 */
const mergeSort = (array) => {
    const length = array.length;
    if (length === 1) {
        return array;
    }

    // Split array into right & left
    const mid = Math.floor(length / 2);
    let left = array.slice(0, mid);
    let right = array.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
}
/**
 * Takes two sorted array & merge them into one sorted array
 * @param {Array} left
 * @param {Array} right
 * @returns {Array} result
 */
const merge = (left, right) => {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const arr = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
const sortedArray = mergeSort(arr);
console.log(sortedArray);