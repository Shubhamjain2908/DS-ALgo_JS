/**
 *The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning. The algorithm maintains two subarrays in a given array.
    1) The subarray which is already sorted.
    2) Remaining subarray which is unsorted.
    In every iteration of selection sort, the minimum element (considering ascending order) from the unsorted subarray is picked and moved to the sorted subarray.
 * O(n^2) time complexity & O(1) space complexity
 * @param {Array} array
 */
const selectionSort = (array) => {
    const length = array.length;
    for (let i = 0; i < length; i++) {
        // set current index as min
        let min = i;
        let temp = array[i];
        for (let j = i + 1; j < length; j++) {
            if (array[j] < array[min]) {
                // update min if current id lower than what we had previously
                min = j;
            }
        }
        array[i] = array[min];
        array[min] = temp;
    }
    return array;
}

const arr = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
selectionSort(arr);
console.log(arr);