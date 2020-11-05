const data = {
    foo: {
        foz: [1, 2, 3],
        bar: {
            baz: ['a', 'b', 'c'],
        },
    },
}

// 

const deepGet = (obj, keys) => {
    // check for array
    let temp = Object.assign({}, obj);
    for (let i = 0; i < keys.length; i++) {
        const c = keys[i];
        if (temp[c]) {
            temp = temp[c];
        } else {
            return null;
        }
    }
    return temp;
}

console.log(deepGet(data, ['foo', 'foz', 2])); // 3
console.log(deepGet(data, ['foo', 'bar', 'baz', 8, 'foz'])) // null
console.log(data);

// series (when 1 then 2 will execute)
// currying
const func = (x, y) => async (arg) => await y((async () => await x(arg))());

// can have multiple arguments
const pipeFunctions = (...funcs) => async (args) => {

    return await funcs.reduce(async (a, b) => {
        console.log(a, b);
        return await b(a);
    }, args);
}

const sum = pipeFunctions(
    (x) => x + 1, // 6
    (x) => new Promise((resolve) => setTimeout(() => resolve(x + 2), 3000)), // 8 
    (x) => x + 3, // 11
    async (x) => (await x) + 4 // 15
)

// (async () => {
//   console.log(await sum(5)) // 15 (after three seconds)
// })()

sum(5).then(val => console.log('val', val))

console.log('script start');    // 1

setTimeout(function () {    // task q (event)
    console.log('setTimeout');        // 5
}, 0);
// stack => micro q => task q
Promise.resolve()   // micro q
    .then(function () {
        console.log('promise1');    //  3
    })
    .then(function () {
        console.log('promise2');    // 4
    });

console.log('script end');  // 2


