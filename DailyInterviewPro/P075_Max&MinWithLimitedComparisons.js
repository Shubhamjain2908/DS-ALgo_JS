/**
 * Microsoft
 * 
 * Given a list of numbers of size n, where n is greater than 3, find the maximum and minimum of the list using less than 2 * (n - 1) comparisons.
 */

const getMinMax = (arr) => {

    const n = arr.length;
    let mx, mn, i = 2;
    // If array has even number of elements then initialize the first two elements as minimum and maximum  
    if (n % 2 == 0) {
        mx = Math.max(arr[0], arr[1]);
        mn = Math.min(arr[0], arr[1]);
    }

    // If array has odd number of elements then initialize the first element as minimum and maximum  
    else {
        mx = mn = arr[0];
        // set the starting index for loop  
        i = 1;
    }
    // In the while loop, pick elements in pair and compare the pair with max and min so far  
    while (i < n - 1) {
        if (arr[i] < arr[i + 1]) {
            mx = Math.max(mx, arr[i + 1]);
            mn = Math.min(mn, arr[i]);
        }
        else {
            mx = Math.max(mx, arr[i]);
            mn = Math.min(mn, arr[i + 1]);
        }
        // Increment the index by 2 as two elements are processed in loop  
        i += 2;
    }
    return [mx, mn];
}


const list = [3, 5, 1, 2, 4, 8];
console.log(getMinMax(list));