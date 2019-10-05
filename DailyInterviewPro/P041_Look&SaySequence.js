/**
 * Google
 * 
 * A look-and-say sequence is defined as the integer sequence beginning with a single digit in which the next term is obtained by describing the previous term. An example is easier to understand:

    Each consecutive value describes the prior value.
    1      #
    11     # one 1's
    21     # two 1's
    1211   # one 2, and one 1.
    111221 # #one 1, one 2, and two 1's.

    Your task is, return the nth term of this sequence.
 */

const getLookSayNo = (N) => {
    if (N === 1) {
        return '1';
    }
    if (N === 2) {
        return '11';
    }
    let str = "11";
    for (let i = 3; i <= N; i++) {
        str += '$';
        let len = str.length;
        let count = 1;
        let temp = '';
        let arr = [...str];
        for (let j = 1; j < len; j++) {
            if (arr[j] !== arr[j - 1]) {
                temp += count + 0;
                temp += arr[j - 1];
                count = 1;
            } else {
                count++;
            }
        }
        str = temp;
    }
    return str;
}

const N = 6;
console.log(getLookSayNo(N));