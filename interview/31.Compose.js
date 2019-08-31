const sum1 = num => num + 1;

const sum2 = num => num + 2;

const compose = (f, g) => a => f(g(a));

console.log(compose(sum1, sum2)(5));    // 8