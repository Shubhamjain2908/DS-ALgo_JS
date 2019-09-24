/**
 * Facebook
 *
 * Given a list, find the k-th largest element in the list.
    Input: list = [3, 5, 2, 4, 6, 8], k = 3
    Output: 5
 */

const sort = require('../extras/Sorting/MergeSort');

const findKthElem = (array, k) => {
    return sort.mergeSort(array)[array.length - k];
}

const list = [3, 5, 2, 4, 6, 8], k = 3;
console.log(findKthElem(list, k));