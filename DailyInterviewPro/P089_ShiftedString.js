/**
 * Apple
 * 
 * You are given two strings, A and B. Return whether A can be shifted some number of times to get B.

    Eg. A = abcde, B = cdeab should return true because A can be shifted 3 times to the right to get B. 
    A = abc and B = acb should return false.
 */

const isShifted = (A, B) => {
    // There lengths must be same and B must be a substring of A concatenated with A.   
    return (A.length === B.length) && ((A + A).indexOf(B) !== -1);
}

const A = 'abcde', B = 'cdeab';
console.log(isShifted(A, B));   // true

const A2 = 'abc', B2 = 'acb';
console.log(isShifted(A2, B2));   // false