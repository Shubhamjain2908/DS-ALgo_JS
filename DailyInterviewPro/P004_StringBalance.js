/**
 * Uber
 * 
 * Imagine you are building a compiler. Before running any code, the compiler must check that the parentheses in the program are balanced. Every opening bracket must have a corresponding closing bracket. We can approximate this using strings. 
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. 
 * An input string is valid if:
    - Open brackets are closed by the same type of brackets.
    - Open brackets are closed in the correct order.
    - Note that an empty string is also considered valid.
 * Example:
    Input: "((()))"
    Output: True

    Input: "[()]{}"
    Output: True

    Input: "({[)]"
    Output: False
 */

const isBalancedString = (str) => {
    if (str.length % 2 !== 0) {
        return false;
    }
    let arr = [...str];
    let stack = [];
    let top;
    for (let i = 0; i < arr.length; i++) {
        const e = arr[i];
        top = stack[stack.length - 1];
        if (e === '(' || e === '[' || e === '{') {
            stack.push(e);
        } else if ((e === ')' && top === '(') || (e === ']' && top === '[') || (e === '}' && top === '{')) {
            stack.pop();
        } else {
            return false;
        }
    }
    return stack.length === 0;
}

const str1 = '1(';
const str2 = '[()]{}';
const str3 = '({[)]';

console.log(isBalancedString(str1));    // true
console.log(isBalancedString(str2));    // true
console.log(isBalancedString(str3));    // false