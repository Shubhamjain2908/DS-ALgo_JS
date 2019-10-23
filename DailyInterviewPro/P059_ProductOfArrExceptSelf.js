/**
 * Amazon
 * 
 * You are given an array of integers. Return an array of the same size where the element at each index is the product of all the elements in the original array except for the element at that index.

    For example, an input of [1, 2, 3, 4, 5] should return [120, 60, 40, 30, 24].

    You cannot use division in this problem.
 */

const getProductArray = list => {
    let N = list.length;
    let productArray = new Array(N).fill(1);
    for (let i = 0, pi = 1, j = N - 1, pj = 1; (i < N) && (j >= 0); pi *= list[i++], pj *= list[j--]) {
        productArray[i] *= pi;
        productArray[j] *= pj;
    }
    return productArray;
}

const getProductArray2 = list => list.map((value, _, array) => array.reduce((result, curr) => curr !== value ? result = curr * result : result, 1));

const list = [1, 2, 3, 4, 5];
console.log(getProductArray(list));
console.log(getProductArray2(list));