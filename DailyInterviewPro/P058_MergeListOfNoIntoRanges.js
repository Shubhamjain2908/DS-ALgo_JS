/**
 * Facebook
 * 
 * Given a sorted list of numbers, return a list of strings that represent all of the consecutive numbers.

    Example:
        Input: [0, 1, 2, 5, 7, 8, 9, 9, 10, 11, 15]
        Output: ['0->2', '5->5', '7->11', '15->15']
    Assume that all numbers will be greater than or equal to 0, and each element can repeat.
 */

const mergeList = arr => {
    let result = [];
    let startIndex = 0, endIndex = 0;
    for (let i = 1; i <= arr.length; i++) {
        let startElem = arr[startIndex];
        let endElem = arr[endIndex];
        if (endElem === arr[i] || endElem + 1 === arr[i]) {
            endIndex = i;
        } else {
            result.push(startElem + '->' + endElem);
            endIndex++;
            startIndex = endIndex;
        }
    }
    return result;
}

const arr = [0, 1, 2, 5, 7, 8, 9, 9, 10, 11, 15];
console.log(mergeList(arr));

const arr2 = [0, 2, 5, 7, 10, 15];
console.log(mergeList(arr2));

const arr3 = [0, 0, 0, 1, 1, 1, 2, 3, 3, 4, 4, 5, 7, 8, 8, 10, 10, 10, 12, 13, 14, 15, 15];
console.log(mergeList(arr3));