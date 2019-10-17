/**
 * Uber
 * 
 * You are given a string of parenthesis. Return the minimum number of parenthesis that would need to be removed in order to make the string valid. 
 * "Valid" means that each open parenthesis has a matching closed parenthesis.
Example:
    Input: '()())()'
    Output: 1
 */

const minRemovals = str => {
    let st = [];
    for (const e of str) {
        if (e === '(') {
            st.push(e);
        } else if (e === ')' && st[st.length - 1] === '(') {
            st.pop();
        } else {
            st.push(e);
        }
    }
    return st.length;
}

const str = '()())()';
console.log(minRemovals(str));