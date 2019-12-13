/**
 * Microsoft
 * 
 * Return the longest run of 1s for a given integer n's binary representation.

    Example:
        Input: 242
        Output: 4
        242 in binary is 0b11110010, so the longest run of 1 is 4.
 */

/**
 * Using Bit Magic: The idea is based on the concept that if we AND a bit sequence with a shifted version of itself, we’re effectively removing the trailing 1 from every sequence of consecutive 1s.
 */
const consecutiveOnes = x => {
    // Initialize result 
    let count = 0;

    // Count the number of iterations to 
    // reach x = 0. 
    while (x != 0) {
        // This operation reduces length 
        // of every sequence of 1s by one. 
        x = (x & (x << 1));

        count++;
    }

    return count;
}

console.log(consecutiveOnes(242));