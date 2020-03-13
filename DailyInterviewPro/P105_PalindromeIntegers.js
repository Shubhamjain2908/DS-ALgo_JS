/**
 * Twitter
 *
 * Given an integer, check if that integer is a palindrome. For this problem do not convert the integer to a string to check if it is a palindrome.
    1234321 => True
    1234322 => False
 */

const isPallinInt = x => {
    // Special cases:
    // When x < 0, x is not a palindrome.
    // Also if the last digit of the number is 0, in order to be a palindrome, the first digit of the number also needs to be 0.
    // Only 0 satisfy this property.
    if (x < 0 || (x % 10 == 0 && x != 0)) {
        return false;
    }

    let revertedNumber = +[...(x + '')].reverse().join('');

    return x === revertedNumber || x === Math.floor(revertedNumber / 10);
}

console.log(isPallinInt(1234321));
console.log(isPallinInt(1234322));