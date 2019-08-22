console.log([10, 20, 30, 40, 50].indexOf(30));  // 2
console.log([{ name: 'Pam' }, { name: 'Kent' }].indexOf({ name: 'Kent' })); // -1
console.log('hello world'.indexOf('o')); // 4 -> First match
console.log([[1], [2], [3], [4]].indexOf([2])); // -1

const obj1 = { name: 'Pam' };
const obj2 = { name: 'Kent' };
const arr = [obj1, obj2];

console.log(arr.indexOf(obj2)); // 1

const a1 = [1];
const a2 = [2];
const a3 = [3];
const a4 = [4];
const a5 = a4;

const arr2 = [];
arr2.push(a1);
arr2.push(a2);
arr2.push(a3);
arr2.push(a4);

console.log(arr2.indexOf(a3)); // 2
console.log(arr2.indexOf(a5)); // 3