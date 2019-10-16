/**
 * An encoded string (s) is given, the task is to decode it. The pattern in which the strings are encoded is as follows.
    <count>[sub_str] ==> The substring 'sub_str' appears count times.

    Example =>
        Input : str = '1[b]'
        Output : b

        Input : str = '2[ab]'
        Output : abab

        Input : str = '2[a2[b]]'
        Output : abbabb

        Input : str = '3[b2[ca]]'
        Output : bcacabcacabcaca
 */

const computeString = (str, N) => new Array(+N).fill(str).join('');

const decodeString = str => {
    str = [...str];
    let charStack = [];
    let numStack = [];
    let isChar = false;
    for (let i = 0; i < str.length; i++) {
        const e = str[i];
        if (e === ']') {
            const ch = charStack.pop();
            const no = numStack.pop();
            const computedString = computeString(ch, no);
            charStack.length ? charStack.push(charStack.pop() + computedString) : charStack.push(computedString);
        } else if (isNaN(e) && e !== '[') {
            isChar ? charStack.push(charStack.pop() + e) : charStack.push(e);
            isChar = true;
        } else if (!isNaN(e)) {
            (!isChar && numStack.length) ? numStack.push(numStack.pop() + e) : numStack.push(e);
            isChar = false;
        }
    }
    return charStack.reverse().join('');
}

const str = '1[b]';
console.log(str, ' => ', decodeString(str));   // b

const str2 = '2[ab]';
console.log(str2, ' => ', decodeString(str2));   // abab

const str3 = '2[a2[b]]';
console.log(str3, ' => ', decodeString(str3));   // abbabb

const str4 = '3[b2[ca]]';
console.log(str4, ' => ', decodeString(str4));   // bcacabcacabcaca