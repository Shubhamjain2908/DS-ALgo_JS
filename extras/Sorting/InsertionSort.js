/**
 *Insertion sort is a simple sorting algorithm that works the way we sort playing cards in our hands.
Algorithm
// Sort an arr[] of size n
insertionSort(arr, n)
Loop from i = 1 to n-1.
â€¦â€¦a) Pick element arr[i] and insert it into sorted sequence arr[0â€¦i-1]
Usually recommended when have nearly sorted list.
 * O(n^2) time complexity & O(1) space complexity
 * @param {Array} array
 */
const insertionSort = (array) => {
    const length = array.length;
    for (let i = 0; i < length; i++) {
        if (array[i] < array[0]) {
            // move number to first position
            array.unshift(array.splice(i, 1)[0]);
        } else {
            // where number should go
            for (let j = 1; j < i; j++) {
                if (array[i] > array[j - 1] && array[i] < array[j]) {
                    // move number to the right sopt
                    array.splice(j, 0, array.splice(i, 1)[0]);
                }
            }
        }
    }
    return array;
}

const arr = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
insertionSort(arr);
console.log(arr);