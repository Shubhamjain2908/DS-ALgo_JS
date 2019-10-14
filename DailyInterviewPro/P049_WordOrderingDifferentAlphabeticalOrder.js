/**
 * Apple
 *
 * Given a list of words, and an arbitrary alphabetical order, verify that the words are in order of the alphabetical order.

    Example:
        Input: words = ['abcd', 'efgh'], order='zyxwvutsrqponmlkjihgfedcba'
        Output: false
            Explanation: 'e' comes before 'a' so 'efgh' should come before 'abcd'

    Example 2:
        Input: words = ['zyx', 'zyxw', 'zyxwy'], order='zyxwvutsrqponmlkjihgfedcba'
        Output: true
            Explanation: The words are in increasing alphabetical order

    Example 3:
        Input : words = ['hello', 'leetcode'], order = 'habcldefgijkmnopqrstuvwxyz'
        Output : true

    Example 4:
        Input : words = ['word', 'world', 'row'], order = 'abcworldefghijkmnpqstuvxyz'
        Output : false
            Explanation : As ‘d’ comes after ‘l’ in Order, thus words[0] > words[1], hence the sequence is unsorted.
 */

const isOrderCorrect = (order, words) => {
    let order_index = new Map();
    [...order].forEach((v, i) => order_index.set(v, i + 1));
    for (let i = 0; i < words.length - 1; i++) {
        const word1 = words[i];
        const word2 = words[i + 1];
        for (let j = 0; j < Math.min(word1.length, word2.length); j++) {
            if (word1[j] !== word2[j]) {
                if (order_index.get(word1[j]) > order_index.get(word2[j])) {
                    return false;
                }
                break;
            } else {
                if (word1.length > word2.length) {
                    return false;
                }
            }
        }
    }
    return true;
}

const order1 = 'zyxwvutsrqponmlkjihgfedcba';
const words1 = ['abcd', 'efgh'];
console.log(isOrderCorrect(order1, words1));    // false

const order2 = 'zyxwvutsrqponmlkjihgfedcba';
const words2 = ['zyx', 'zyxw', 'zyxwy'];
console.log(isOrderCorrect(order2, words2));    // true

const order3 = 'habcldefgijkmnopqrstuvwxyz';
const words3 = ['hello', 'leetcode'];
console.log(isOrderCorrect(order3, words3));    // true

const order4 = 'abcworldefghijkmnpqstuvxyz';
const words4 = ['word', 'world', 'row'];
console.log(isOrderCorrect(order4, words4));    // false