/**
 * LinkedIn
 * 
 * Given a string, rearrange the string so that no character next to each other are the same. If no such arrangement is possible, then return None.

    Example:
        Input: abbccc
        Output: cbcbca

        Input: aaabc 
        Output: abaca

        Input: aaabb
        Output: ababa 

        Input: aa 
        Output: Not Possible

        Input: aaaabc 
        Output: Not Possible
 */

function Key(freq, c) {
    this.freq = freq;
    this.c = c;
}


const rearrangeString = str => {

}

const str = 'abbccc';
console.log(rearrangeString(str));  // cbcbca

const str2 = 'aaabc';
console.log(rearrangeString(str2));  // abaca

const str3 = 'aaabb';
console.log(rearrangeString(str3));  // ababa

const str4 = 'aa';
console.log(rearrangeString(str4));  // Not Possible

const str5 = 'aaaabc';
console.log(rearrangeString(str5));  // Not Possible