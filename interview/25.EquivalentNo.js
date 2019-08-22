console.log(900.9 === 3 * 300.3);   // false

console.log(3 * 300.3); // 900.9000000000001

// In JS all no. are IEEE 754 floating point numbers.

for (let i = 0; i < 10; i++) {
    console.log(i * 300.3);
}

// toFixed(2)
console.log(900.9 === +(3 * 300.3).toFixed(2));   // true

// toPrecision
console.log(900.9 === +(3 * 300.3).toPrecision(12));   // true

//Multiply by decimal
console.log(900.9 === (3 * (300.3 * 10)) / 10);   // true