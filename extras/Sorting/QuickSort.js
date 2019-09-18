/**
 * QuickSort is a Divide and Conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot. There are many different versions of quickSort that pick pivot in different ways.
    Always pick first element as pivot.
    Always pick last element as pivot (implemented below)
    Pick a random element as pivot.
    Pick median as pivot.
 * O(n*logn) (O(n^2) in worst whin pivot is the smallest or largest element in list) time complexity & O(log(n)) space complexity
 * @param {Array} array
 */
const quickSort = (array) => {
    //Select first and last index as 2nd and 3rd parameters
    sort(array, 0, array.length - 1);
}

/**
 * The main function that implements QuickSort()
 * @param {Array} array -> Array to be sorted
 * @param {Number} left -> Starting index,
 * @param {Number} right -> Ending index
 */
const sort = (array, left, right) => {
    let pivot;
    let partitionIndex;

    if (left < right) {
        pivot = right;
        partitionIndex = partition(array, pivot, left, right);

        //sort left and right
        sort(array, left, partitionIndex - 1);
        sort(array, partitionIndex + 1, right);
    }
    return array;
}

const partition = (array, pivot, left, right) => {
    let pivotValue = array[pivot];
    let partitionIndex = left;

    for (let i = left; i < right; i++) {
        if (array[i] < pivotValue) {
            swap(array, i, partitionIndex);
            partitionIndex++;
        }
    }
    swap(array, right, partitionIndex);
    return partitionIndex;
}

const swap = (array, firstIndex, secondIndex) => {
    let temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}

const arr = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
quickSort(arr);
console.log(arr);