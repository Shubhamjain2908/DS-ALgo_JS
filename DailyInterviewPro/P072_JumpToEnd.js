/**
 * Facebook
 *
 * Starting at index 0, for an element n at index i, you are allowed to jump at most n indexes ahead. Given a list of numbers, find the minimum number of jumps to reach the end of the list.

    Example:
        Input: [3, 2, 5, 1, 1, 9, 3, 4]
        Output: 2
        Explanation:

        The minimum number of jumps to get to the end of the list is 2:
        3 -> 5 -> 4
 */

// O(n^2) Time Complexity
const minJump = arr => {
    const n = arr.length;
    let jumps = new Array(n); // jumps[n-1] will hold the result 
    let i, j;

    if (n == 0 || arr[0] == 0)
        return Number.MAX_SAFE_INTEGER; // if first element is 0, end cannot be reached 

    jumps[0] = 0;

    // Find the minimum number of jumps to reach arr[i] 
    // from arr[0], and assign this value to jumps[i] 
    for (i = 1; i < n; i++) {
        jumps[i] = Number.MAX_SAFE_INTEGER;
        for (j = 0; j < i; j++) {
            if (i <= j + arr[j] && jumps[j] != Number.MAX_SAFE_INTEGER) {
                jumps[i] = Math.min(jumps[i], jumps[j] + 1);
                break;
            }
        }
    }
    return jumps[n - 1];
}

// O(n) Time Complexity
const minJumps = (arr) => {
    if (arr.length <= 1)
        return 0;

    // Return -1 if not possible to jump 
    if (arr[0] == 0)
        return -1;

    // initialization 
    let maxReach = arr[0];
    let step = arr[0];
    let jump = 1;


    // Start traversing array 
    for (let i = 1; i < arr.length; i++) {
        // Check if we have reached the end of the array 
        if (i == arr.length - 1)
            return jump;

        // updating maxReach 
        maxReach = Math.max(maxReach, i + arr[i]);

        // we use a step to get to the current index 
        step--;

        // If no further steps left 
        if (step == 0) {
            //  we must have used a jump 
            jump++;

            //Check if the current index/position  or lesser index 
            // is the maximum reach point from the previous indexes 
            if (i >= maxReach)
                return -1;

            // re-initialize the steps to the amount 
            // of steps to reach maxReach from position i. 
            step = maxReach - i;
        }
    }

    return -1;
}

const arr = [3, 2, 5, 1, 1, 9, 3, 4];
console.log(minJump(arr));
console.log(minJumps(arr));