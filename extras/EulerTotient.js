/**
 * series = [1,1,2,2,4,2,6,4,6,4,10,4,12,6,8,8,16.....,168,80,216,120,164,100] 
 */

const gcd = (a, b) => a === 0 ? b : gcd(b % a, a);

// A simple method to evaluate 
// Euler Totient Function
const phi = (n) => {
    let result = 1;
    for (let i = 2; i < n; i++) {
        if (gcd(i, n) === 1) {
            result += 1;
        }
    }
    return result;
}

const series = k => {
    let arr = [];
    for (let i = 1; i < k + 1; i++) {
        arr.push(phi(i));
    }
    console.log(arr);
}

series(12);