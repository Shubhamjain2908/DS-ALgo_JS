/**
 * Facebook
 * 
 * Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 * Example:
    Input: [0,1,0,3,12]
    Output: [1,3,12,0,0]
    ^You must do this in-place without making a copy of the array.
    ^^Minimize the total number of operations.
 */

const move0ToEnd = (array) => {
    let count = 0;
    let temp;
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== 0) {
            temp = array[i];
            array[i] = array[count];
            array[count] = temp;
            count++;
        }
    }
}

const move0ToStart = (array) => {
    let count = array.length - 1;
    let temp;
    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] !== 0) {
            temp = array[i];
            array[i] = array[count];
            array[count] = temp;
            count--;
        }
    }
}

const arr = [0, 1, 0, 3, 12];
move0ToEnd(arr);
console.log(arr);

move0ToStart(arr);
console.log(arr);