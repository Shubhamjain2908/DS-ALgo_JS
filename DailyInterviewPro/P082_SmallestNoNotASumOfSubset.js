/**
 * AirBnB
 * 
 * Given a sorted list of positive numbers, find the smallest positive number that cannot be a sum of any subset in the list.

    Example:
        Input: [1, 2, 3, 8, 9, 10]
        Output: 7
        Numbers 1 to 6 can all be summed by a subset of the list of numbers, but 7 cannot.

        Input:  [1, 3, 6, 10, 11, 15];
        Output: 2

        Input:  [1, 1, 1, 1];
        Output: 5

        Input:  [1, 1, 3, 4];
        Output: 10

        Input:  [1, 2, 5, 10, 20, 40];
        Output: 4

        Input:  [1, 2, 3, 4, 5, 6];
        Output: 22
 */

const minNo = list => {
    const n = list.length;
    let res = 1; // Initialize result 
    // Traverse the array and increment 'res' if arr[i] is smaller than or equal to 'res'. 
    for (let i = 0; i < n && list[i] <= res; i++)
        res = res + list[i];
    return res;
}

const list = [1, 2, 3, 8, 9, 10];
console.log(minNo(list));   // 7

const list2 = [1, 3, 6, 10, 11, 15];
console.log(minNo(list2));   // 2

const list3 = [1, 1, 1, 1];
console.log(minNo(list3));   // 5

const list4 = [1, 1, 3, 4];
console.log(minNo(list4));   // 10

const list5 = [1, 2, 5, 10, 20, 40];
console.log(minNo(list5));   // 4

const list6 = [1, 2, 3, 4, 5, 6];
console.log(minNo(list6));   // 22
