/**
 * Facebook
 * 
 * You are given an array of integers. Return all the permutations of this array.
    Input: [1, 2, 3]
    Output: [[1, 2, 3], [2, 1, 3], [2, 3, 1], [1, 3, 2], [3, 1, 2], [3, 2, 1]]
 */

var set = new Set();

const permute = (arr, l = 0, r = arr.length) => {
    if (l === r) {
        // console.log(arr.join(''));
        set.add(arr.join(''));
    }
    else {
        for (let i = l; i < r + 1; i++) {
            [arr[l], arr[i]] = [arr[i], arr[l]];
            permute(arr, l + 1, r);
            [arr[l], arr[i]] = [arr[i], arr[l]]; // backtrack
        }
    }
}

const arr = [1, 2, 3];
permute(arr);
console.log(set);