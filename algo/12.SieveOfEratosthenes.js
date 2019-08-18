function sieveOfEratosthenes(n) {
    let primes = new Array(n + 1).fill(true);
    primes[0] = primes[1] = false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        for (let j = 2; j * i <= n; j++) {
            primes[i * j] = false;
        }
    }
    let result = [];
    primes.filter((n, i) => {
        if (n === true) {
            result.push(i);
            return i;
        }
    });
    return result;
}

const c = sieveOfEratosthenes(20);
console.log(c);