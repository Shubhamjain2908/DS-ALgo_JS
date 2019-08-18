/**
 * take in a single unsorted array as parameter 
 * split the array into two halves
 * @param {Unsorted Array} arr 
 */
function mergeSort(arr) {
    const length = arr.length;
    if (length < 2) {
        return arr;
    }
    let middleIndex = Math.floor(length / 2);
    let firstHalf = arr.slice(0, middleIndex);
    let secondHalf = arr.slice(middleIndex);

    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}

/**
 * Merge these sorted arrays into one sorted array
 * @param {Sorted Array} array1 
 * @param {Sorted Array} array2 
 * @returns {One Sorted Array} mergedSortedArray 
 */
function merge(array1, array2) {
    let result = [];
    while (array1.length && array2.length) {
        let minElem;
        if (array1[0] < array2[0]) {
            minElem = array1.shift();
        } else {
            minElem = array2.shift();
        }
        result.push(minElem);
    }
    result = array1.length ? result.concat(array1) : result.concat(array2);
    return result;
}

console.log(mergeSort([11, 7, 4, 1, 15, 12, 3]));

// console.log(merge([1, 2, 3], [4, 5, 6]));