/**
 * Google
 *
 * There are n people lined up, and each have a height represented as an integer.
 * A murder has happened right in front of them, and only people who are taller than everyone in front of them are able to see what has happened.
 * How many witnesses are there?
    Example:
    Input: [3, 6, 3, 4, 1]
    Output: 3
        Explanation: Only [6, 4, 1] were able to see in front of them.
          #
          #
          #   #
        # # # #
        # # # #
        # # # # #
        3 6 3 4 1                                 x (murder scene)
 */

const noOfWitness = (array) => {
    const len = array.length;
    let witnesses = 1;
    let max = array[len - 1];
    for (let i = len - 2; i >= 0; i--) {
        const e = array[i];
        if (e > max) {
            max = e;
            witnesses++;
        }
    }
    return witnesses;
}

const arr = [3, 6, 3, 4, 1];
console.log(noOfWitness(arr));