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

// const sortColors = (array) => {
//     let zeroIndex = -1;
//     let oneIndex = -1;
//     let twoIndex = -1;
//     const len = array.length;
//     for (let i = 0; i < len; i++) {
//         const e = array[i];
//         if (e === 0) {
//             zeroIndex++;
//             // oneIndex++;
//             // twoIndex++;
//             let temp = array[zeroIndex];
//             array[zeroIndex] = array[i];
//             array[i] = temp;
//             // if (typeof zeroIndex !== 'undefined') {
//             //     array[zeroIndex] = array[i] + (array[i] = array[zeroIndex], 0);
//             // } else {
//             //     zeroIndex = i;
//             // }
//         } else if (e === 1) {
//             // oneIndex++;
//             // twoIndex++;
//             // array[oneIndex] = 1;
//             // if (typeof oneIndex !== 'undefined') {
//             //     array[oneIndex] = array[i] + (array[i] = array[oneIndex], 0);
//             // } else {
//             //     oneIndex = i;
//             // }
//         } else if (e === 2) {
//             twoIndex++;
//             // array[array.length - 1 - twoIndex] = 2;
//             let temp = array[len - 1 - twoIndex];
//             array[len - 1 - twoIndex] = array[i];
//             array[i] = temp;
//         }
//         console.log(e, zeroIndex, oneIndex, twoIndex);
//     }
//     return arr;
// }
// a = b + (b=a, 0) // Swapping two no.

const sortColors = (array) => {
    const len = array.length;
    let low = 0, mid = 0, temp = 0, high = len - 1;
    while (mid <= high) {
        switch (array[mid]) {
            case 0:
                [array[mid], array[low]] = [array[low], array[mid]];
                low++;
                mid++;
                break;
            case 1:
                mid++;
                break;
            case 2:
                [array[mid], array[high]] = [array[high], array[mid]];
                high--;
                break;
        }
    }
}

const arr = [2, 0, 2, 1, 1, 0];
console.log('Original => ', arr);
sortColors(arr);
console.log('After Sorting => ', arr);
