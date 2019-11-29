/**
 * Amazon
 * 
 * You are given an array of integers. Return the length of the longest consecutive elements sequence in the array.

For example, the input array [100, 4, 200, 1, 3, 2] has the longest consecutive sequence 1, 2, 3, 4, and thus, you should return its length, 4.
 */

// Returns length of the longest consecutive subsequence 
const findLongestConseqSubseq = (arr) => {
    const n = arr.length;
    let S = new Set();
    let ans = 0;

    // Hash all the array elements 
    for (let i = 0; i < n; ++i)
        S.add(arr[i]);

    // check each possible sequence from the start 
    // then update optimal length 
    for (let i = 0; i < n; ++i) {
        // if current element is the starting 
        // element of a sequence 
        if (!S.has(arr[i] - 1)) {
            // Then check for next elements in the 
            // sequence 
            let j = arr[i];
            while (S.has(j))
                j++;

            // update  optimal length if this length 
            // is more 
            if (ans < j - arr[i])
                ans = j - arr[i];
        }
    }
    return ans;
}

const arr = [100, 4, 200, 1, 3, 2];
console.log(findLongestConseqSubseq(arr));