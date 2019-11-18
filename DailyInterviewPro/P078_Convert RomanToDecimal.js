/**
 * Twitter
 *
 * Given a Roman numeral, find the corresponding decimal value. Inputs will be between 1 and 3999.

    Example:
        Input: IX
        Output: 9

        Input: VII
        Output: 7

        Input: MCMIV
        Output: 1904
    Roman numerals are based on the following symbols:
    I     1
    IV    4
    V     5
    IX    9
    X     10
    XL    40
    L     50
    XC    90
    C     100
    CD    400
    D     500
    CM    900
    M     1000
Numbers are strings of these symbols in descending order. In some cases, subtractive notation is used to avoid repeated characters. The rules are as follows:
1.) I placed before V or X is one less, so 4 = IV (one less than 5), and 9 is IX (one less than 10)
2.) X placed before L or C indicates ten less, so 40 is XL (10 less than 50) and 90 is XC (10 less than 100).
3.) C placed before D or M indicates 100 less, so 400 is CD (100 less than 500), and 900 is CM (100 less than 1000).
 */

// This function returns value of a Roman symbol 
const value = (r) => {
    if (r === 'I')
        return 1;
    if (r === 'V')
        return 5;
    if (r === 'X')
        return 10;
    if (r === 'L')
        return 50;
    if (r === 'C')
        return 100;
    if (r === 'D')
        return 500;
    if (r === 'M')
        return 1000;
    return -1;
}

const convertRomanToDec = str => {
    // Initialize result 
    let res = 0;

    for (let i = 0; i < str.length; i++) {
        // Getting value of symbol s[i] 
        let s1 = value(str.charAt(i));

        // Getting value of symbol s[i+1] 
        if (i + 1 < str.length) {
            let s2 = value(str.charAt(i + 1));

            // Comparing both values 
            if (s1 >= s2) {
                // Value of current symbol is greater 
                // or equalto the next symbol 
                res = res + s1;
            }
            else {
                res = res + s2 - s1;
                i++; // Value of current symbol is 
                // less than the next symbol 
            }
        }
        else {
            res = res + s1;
            i++;
        }
    }

    return res;
}

const str = 'IX';
console.log(convertRomanToDec(str));    // 9

const str2 = 'VII';
console.log(convertRomanToDec(str2));   // 7

const str3 = 'MCMIV';
console.log(convertRomanToDec(str3));   // 1904