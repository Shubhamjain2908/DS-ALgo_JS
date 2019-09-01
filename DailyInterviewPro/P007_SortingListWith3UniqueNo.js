/**
 * Google
 * 
 * Given a list of numbers with only 3 unique numbers (1, 2, 3), sort the list in O(n) time.
 * Example 1:
    Input: [3, 3, 2, 1, 3, 2, 1]
    Output: [1, 1, 2, 2, 3, 3, 3]

    ^^ Challenge: Try sorting the list using constant space.
 */

const sort = (arr) => {
    let min = Number.MAX_SAFE_INTEGER;
    let secondMin = Number.MAX_SAFE_INTEGER - 1;
    let thirdMin = Number.MAX_SAFE_INTEGER - 2;
    const obj = {};
    for (let i = 0; i < arr.length; i++) {
        const e = arr[i];
        if (obj[e]) {
            obj[e] = obj[e] + 1;
        } else {
            obj[e] = 1;
        }
        if (e < min) {
            thirdMin = secondMin;
            secondMin = min;
            min = e;
        } else if (e < secondMin && e !== min) {
            thirdMin = secondMin;
            secondMin = e;
        } else if (e < thirdMin && e !== min && e !== secondMin) {
            thirdMin = e;
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (i < obj[min]) {
            arr[i] = min;
        } else if (i < obj[min] + obj[secondMin]) {
            arr[i] = secondMin;
        } else {
            arr[i] = thirdMin;
        }
    }
    return arr;
}

const arr = [3, 3, 2, 1, 3, 2, 1];
sort(arr);
console.log(arr);