/**
 * Amazon
 * 
 * Version numbers are strings that are used to identify unique states of software products. A version number is in the format a.b.c.d. and so on where a, b, etc. are numeric strings separated by dots. 
 * These generally represent a hierarchy from major to minor changes. Given two version numbers version1 and version2, conclude which is the latest version number. 
 * Your code should do the following: 
    If version1 > version2 return 1. 
    If version1 < version2 return -1.
    Otherwise return 0. 

Note that the numeric strings such as a, b, c, d, etc. may have leading zeroes, and that the version strings do not start or end with dots. Unspecified level revision numbers default to 0.

    Example: 
        Input: 
            version1 = "1.0.33"
            version2 = "1.0.27"
        Output: 1 #version1 > version2

        Input:
            version1 = "0.1"
            version2 = "1.1"
        Output: -1 #version1 < version2

        Input: 
            version1 = "1.01"
            version2 = "1.001"
        Output: 0 #ignore leading zeroes, 01 and 001 represent the same number. 

        Input:
            version1 = "1.0"
            version2 = "1.0.0"
        Output: 0 #version1 does not have a 3rd level revision number, which defaults to "0"
 */

const compareVersion = (version1, version2) => {
    // This will split both the versions by '.' 
    const arr1 = version1.split(".")
    const arr2 = version2.split(".")

    // Initializer for the version arrays 
    let i = 0

    // We have taken into consideration that both the 
    // versions will contains equal number of delimiters 
    while (i < arr1.length) {

        // Version 2 is greater than version 1 
        if (+arr2[i] > +arr1[i]) {
            return -1;
        }

        // Version 1 is greater than version 2 
        if (+arr1[i] > +arr2[i]) {
            return 1;
        }

        // We can't conclude till now 
        i += 1
    }

    // Both the versions are equal 
    return 0;
}

console.log(compareVersion('1.0.33', '1.0.27'));    // 1
console.log(compareVersion('0.1', '1.1'));  // -1
console.log(compareVersion('1.01', '1.001'));   // 0
console.log(compareVersion('1.0', '1.0.0'));    // 0