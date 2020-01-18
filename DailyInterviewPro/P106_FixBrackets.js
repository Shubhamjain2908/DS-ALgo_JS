/**
 * Twitter
 *
 * Given a string with only ( and ), find the minimum number of characters to add or subtract to fix the string such that the brackets are balanced.

    Example:
        Input: '(()()'
        Output: 1
    Explanation:
The fixed string could either be ()() by deleting the first bracket, or (()()) by adding a bracket. These are not the only ways of fixing the string, there are many other ways by adding it in different positions!
 */

// Function to return required minimum number  
const minParentheses = p => {

    // maintain balance of string  
    let bal = 0;
    let ans = 0;

    for (let i = 0; i < p.length; ++i) {

        bal += p.charAt(i) == '(' ? 1 : -1;

        // It is guaranteed bal >= -1  
        if (bal == -1) {
            ans += 1;
            bal += 1;
        }
    }

    return bal + ans;
}

console.log(minParentheses('(()()'));