const reverse = (str) => {
    const backwards = [];
    for (let i = str.length - 1; i >= 0; i--) {
        backwards.push(str[i]);
    }
    return backwards.join('');
}

const reverse2 = str => str.split('').reverse().join('');

const reverse3 = str => [...str].reverse().join('');

const str = 'Shubham jain is a good programmer!!';
console.log(reverse(str));
console.log(reverse2(str));
console.log(reverse3(str));