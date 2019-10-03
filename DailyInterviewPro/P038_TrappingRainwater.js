/**
 * Uber
 * 
 * You have a landscape, in which puddles can form. You are given an array of non-negative integers representing the elevation at each location. 
 * Return the amount of water that would accumulate if it rains.
    For example: [0,1,0,2,1,0,1,3,2,1,2,1] should return 6 because 6 units of water can get trapped here.
        X               
    Xâ–ˆâ–ˆâ–ˆXXâ–ˆX              
    Xâ–ˆXXâ–ˆXXXXXX                   
    # [0,1,0,2,1,0,1,3,2,1,2,1]
 */

const findWater = (arr, n) => {
    // left[i] contains height of tallest bar to the 
    // left of i'th bar including itself 
    let left = new Array(n);

    // Right [i] contains height of tallest bar to 
    // the right of ith bar including itself 
    let right = new Array(n);

    // Initialize result 
    let water = 0;

    // Fill left array 
    left[0] = arr[0];
    for (let i = 1; i < n; i++)
        left[i] = Math.max(left[i - 1], arr[i]);

    // Fill right array 
    right[n - 1] = arr[n - 1];
    for (let i = n - 2; i >= 0; i--)
        right[i] = Math.max(right[i + 1], arr[i]);

    // Calculate the accumulated water element by element 
    // consider the amount of water on i'th bar, the 
    // amount of water accumulated on this particular 
    // bar will be equal to min(left[i], right[i]) - arr[i] . 
    for (let i = 0; i < n; i++)
        water += Math.min(left[i], right[i]) - arr[i];

    return water;
}

const trappedWater = (array) => {
    let result = 0;
    let left_max = right_max = 0;
    let low = 0, high = array.length - 1;
    while (low <= high) {
        if (array[low] < array[high]) {
            if (array[low] > left_max) {
                left_max = array[low];
            } else {
                result += left_max - array[low];
            }
            low++;
        } else {
            if (array[high] > right_max) {
                right_max = array[high];
            } else {
                result += right_max - array[high];
            }
            high--;
        }
    }
    return result;
}

const arr = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(trappedWater(arr)); // 6
console.log(findWater(arr, arr.length)); // 6