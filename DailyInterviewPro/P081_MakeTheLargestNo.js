/**
 * Uber
 * 
 * Given a number of integers, combine them so it would create the largest number.
    Example:
        Input:  [17, 7, 2, 45, 72]
        Output:  77245217
 */

const largestNo = arr => {
    return arr.sort((a, b) => (b + '' + a) - (a + '' + b)).join('').replace(/^0*/, '') || '0';
}

const arr = [17, 7, 2, 45, 72];
console.log(largestNo(arr));