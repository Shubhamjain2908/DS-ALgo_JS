/**
 * Apple
 *
 * Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white and blue.

    Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

    Note: You are not suppose to use the libraryâ€™s sort function for this problem.

    ^^^Can you do this in a single pass?

    Example:
    Input: [2,0,2,1,1,0]
    Output: [0,0,1,1,2,2]
 */

// a = b + (b=a, 0) // Swapping two no.

const sortColors = (array) => {
    const len = array.length;
    let low = 0, mid = 0, high = len - 1;
    while (mid <= high) {
        switch (array[mid]) {
            case 0:
                [array[mid], array[low]] = [array[low], array[mid]];    // Swapping
                low++;
                mid++;
                break;
            case 1:
                mid++;
                break;
            case 2:
                [array[mid], array[high]] = [array[high], array[mid]];  // Swapping
                high--;
                break;
        }
    }
}

const arr = [2, 0, 2, 1, 1, 0];
console.log('Original => ', arr);
sortColors(arr);
console.log('After Sorting => ', arr);
