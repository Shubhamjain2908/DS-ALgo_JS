/**
 * Uber
 * 
 * Given a string containing just the characters '(',')','{','}',']','[', find lenght of longest valid (well-formed) substring.
 */

const balancedString = (str) => {
    let arr = [...str];
    let stack = [];
    let top, count = 0;
    for (let i = 0; i < arr.length; i++) {
        const e = arr[i];
        if ((e === ')' && top === '(') || (e === ']' && top === '[') || (e === '}' && top === '{')) {
            top = stack.pop();
            count += 2;
        } else {
            stack.push(e);
            top = e;
        }
    }
    return count;
}

const str1 = '}}}}(()'; // 2
const str2 = ')()())';  // 4
const str3 = '[()]{}';  // 6
const str4 = '({[)]';   // 0

console.log(balancedString(str1));
console.log(balancedString(str2));
console.log(balancedString(str3));
console.log(balancedString(str4));