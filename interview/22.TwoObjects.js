const user1 = {
    name: 'Jordan',
    age: 28,
}

const user2 = {
    name: 'Jordan',
    age: 28,
}

console.log(user1 == user2);    // false
console.log(user1 === user2);   // false
// IN JS we pass objects by reference not value
console.log(JSON.stringify(user1) == JSON.stringify(user2));    // true
console.log(Object.toString(user1) == Object.toString(user2));  // true

const user3 = user1;
user1.h = 'h';
user3.b = 'b';
console.log(user1 == user3);    // true

// Also arrays will show the exact same behaviour as objects

console.log([] == []);    // false
console.log(JSON.stringify([]) == JSON.stringify([]));   // true