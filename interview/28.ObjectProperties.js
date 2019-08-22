const a = {};
const b = { name: 'b' };
const c = { name: 'c' };

// In an object keys can only be string
a[b] = 200; // parsing the object into string
a[c] = 400;

console.log(a);     // { '[object Object]': 400 }
console.log(a[b]);  // 400
console.log(a['[object Object]']);  // 400

Object.keys(a).forEach(e => console.log(typeof e)); // string

// To overcome this we use 'Symbol'