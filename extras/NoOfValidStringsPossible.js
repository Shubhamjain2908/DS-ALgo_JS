/**
 * Uber
 * 
 * Given length N, find no. of valid balanced strings possible
 */
var arr = [];
const validStrings = (open, close, str) => {
    if (open === 0 && close === 0) {
        arr.push(str);
    }
    if (open > close) {
        return;
    }
    if (open > 0) {
        validStrings(open - 1, close, str + '(');
    }

    if (close > 0) {
        validStrings(open, close - 1, str + ')');
    }

}

const getValidStrings = (n) => {
    validStrings(n / 2, n / 2, '');
    return arr;
}

const N = 6;

console.log(getValidStrings(N));