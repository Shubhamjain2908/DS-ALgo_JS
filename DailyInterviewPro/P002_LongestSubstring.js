/**
 * Microsoft
 * 
 * Given a string, find the length of the longest substring without repeating characters.
 * Example: 
    str = "abrkaabcdefghijjxxx",
    ans => 10;
 */

/**
 * Linear Time complexity
 * @param {String} str 
 */
const longestSubstring = (str) => {
    const arr = [...str];
    const charMap = new Map();
    let len = 1;
    let maxLength = 1;
    let prevIndex;
    charMap.set(arr[0], 0);
    for (let i = 1; i < arr.length; i++) {
        const e = arr[i];
        prevIndex = charMap.get(e) ? charMap.get(e) : -1;
        if (prevIndex === -1 || i - len > prevIndex) {
            len++;
        } else {
            if (len > maxLength) {
                maxLength = len;
            }
            len = i - prevIndex;
        }
        charMap.set(e, i);
    }
    return len > maxLength ? len : maxLength;
}

// Not linear time
const longestSubstring2 = (str) => {
    const arr = [...str];
    const charMap = new Map();
    let maxLength = 1;
    let maxLengthString = 1;
    for (let i = 0; i < arr.length; i++) {
        const e = arr[i];
        if (charMap.has(e)) {
            i = charMap.get(e);
            charMap.clear();
        }
        else {
            charMap.set(e, i);
        }
        if (charMap.size > maxLength) {
            maxLength = charMap.size;
            maxLengthString = [...charMap.keys()].join('');
        }
        // if (charMap.has(e)) {
        //     if (len > maxLength) {
        //         maxLength = len;
        //         len = 1;
        //         maxLengthString = [...charMap.keys()].join('');
        //     }
        //     charMap.clear();
        //     charMap.set(e, i);
        // } else {
        //     len++;
        //     charMap.set(e, i);
        // }
    }
    console.log('Max String => ', maxLengthString)
    return maxLength;
}

const str = 'abrkaabcdefghijjxxx';
const str2 = 'shubham';
console.log(longestSubstring(str));
console.log(longestSubstring(str2));