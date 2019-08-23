// Brute Force
const bruteForce = (a) => {
    let b = [];
    const len = a.length;
    for (let i = 0; i < len; i++) {
        const c = a[i];
        if (b.indexOf(c) === -1) {
            b.push(c);
        }
    }
    return b;
}

// using sorting
const sorting = (a) => {
    let b = [];
    const len = a.length;
    a.sort();
    let temp;
    for (let i = 0; i < len; i++) {
        const c = a[i];
        if (c !== temp) {
            b.push(c);
            temp = c;
        }
    }
    return b;
}

// using object
const usingObject = (a) => {
    let b = [];
    obj = {};
    for (let i of a) {
        obj[i] = true;
    }
    b = Object.keys(obj);
    return b;
}

// using set
const usingSet = a => [...new Set(a)];
// let bSet = new Set(a);  // only stores unique values

let a = [1, 2, 5, 2, 1, 8];
console.log('Using Brute Force => ', bruteForce(a));
console.log('Using Sorting => ', sorting(a));
console.log('Using Object => ', usingObject(a));
console.log('Using Set => ', usingSet(a));