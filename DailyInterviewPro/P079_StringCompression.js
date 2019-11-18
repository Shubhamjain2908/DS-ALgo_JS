/**
 * Twitter
 * 
 * Given an array of characters with repeats, compress it in place. The length after compression should be less than or equal to the original array.

    Example:
        Input: ['a', 'a', 'b', 'c', 'c', 'c']
        Output: ['a', '2', 'b', 'c', '3']
 */

const compressString = arr => {
    const len = arr.length;
    let result = [],
        currentChar = arr[0],
        currentCount = 1;
    for (let i = 1; i < len; i++) {
        const e = arr[i];
        if (e === currentChar) {
            currentCount++;
        } else {
            if (currentCount > 1) {
                result.push(currentChar);
                result.push(currentCount);
            } else {
                result.push(currentChar);
            }
            currentChar = e;
            currentCount = 1;
        }
        if (i === len - 1) {
            result.push(currentChar);
            result.push(currentCount);
        }
    }
    return result;
}

const arr = ['a', 'a', 'b', 'c', 'c', 'c'];
console.log(compressString(arr));