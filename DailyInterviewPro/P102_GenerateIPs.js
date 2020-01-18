/**
 * Microsoft
 *
 * An IP Address is in the format of A.B.C.D, where A, B, C, D are all integers between 0 to 255.
Given a string of numbers, return the possible IP addresses you can make with that string by splitting into 4 parts of A, B, C, D.
Keep in mind that integers can't start with a 0! (Except for 0)

    Example:
        Input: 1592551013
        Output: ['159.255.101.3', '159.255.10.13']
 */

// Function checks whether IP digits are valid or not. 
const isValid = (ip) => {
    // Splitting by "." 
    ip = ip.split(".");

    // Checking for the corner cases 
    for (const i of ip) {
        if (i.length > 3 || +i < 0 || +i > 255) {
            return false;
        }
        if (i.length > 1 && +i === 0) {
            return false;
        }
        if (i.length > 1 && +i !== 0 && i.charAt(0) === '0') {
            return false;
        }
    }
    return true;
}

const generateIP = s => {
    const sz = s.length;

    // Check for string size 
    if (sz > 12) return [];
    let snew = s, l = [];

    for (let i = 1; i < sz - 2; i++) {
        for (let j = i + 1; j < sz - 1; j++) {
            for (let k = j + 1; k < sz; k++) {
                snew = snew.substring(0, k) + '.' + snew.substring(k);
                snew = snew.substring(0, j) + '.' + snew.substring(j);
                snew = snew.substring(0, i) + '.' + snew.substring(i);

                if (isValid(snew)) {
                    l.push(snew);
                }
                snew = s;
            }
        }
    }
    return l;
}

const IP = '1592551013';
console.log(generateIP(IP));