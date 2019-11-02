/**
 * LinkedIn
 * 
 * Write a function that reverses the digits a 32-bit signed integer, x. Assume that the environment can only store integers within the 32-bit signed integer range, [-2^31, 2^31 - 1]. The function returns 0 when the reversed integer overflows. 

    Example:
        Input: 123
        Output: 321
 */

const reverseInt = N => {
    var res = 0, val = Math.abs(N);
    while (val > 0) {
        res = res * 10 + (val % 10);
        val = val / 10 | 0;
    }
    res *= Math.sign(N);
    return (res | 0) === res ? res : 0;
}

const reverseInt2 = n => {
    const s = parseInt([...'' + n].reverse().join(''));
    return s >= 2 ** 31 ? 0 : Math.sign(n) * s;
}

const x = 123;
console.log(reverseInt2(x));

const x2 = Math.pow(2, 33) + 2;
console.log(reverseInt2(x2));