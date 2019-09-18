/**
 * Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.
 * O(n^2) time complexity & O(1) space complexity
 * @param {Array} array
 */
const bubbleSort = (array) => {
    const length = array.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
}

const arr = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
bubbleSort(arr);
console.log(arr);