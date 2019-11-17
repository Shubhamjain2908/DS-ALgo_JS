/**
 * Facebook
 * 
 * Two words can be 'chained' if the last character of the first word is the same as the first character of the second word. 
Given a list of words, determine if there is a way to 'chain' all the words in a circle.

    Example:
        Input: ['eggs', 'karat', 'apple', 'snack', 'tuna']
        Output: True
        Explanation:
        The words in the order of ['apple', 'eggs', 'snack', 'karat', 'tuna'] creates a circle of chained words.
 */

const Graph = require('../ds/Graph/Graph');

const isChained = words => {
    let g = new Graph();
    words.forEach(e => {
        let start = e.charAt(0);
        let end = e.charAt(e.length - 1);
        g.addVertex(start);
        g.addVertex(end);
        g.addEdge(start, end);
    });
    let list = g.adjacentList;
    console.log(list);

    // while (true) {

    // }
}

const words = ['eggs', 'karat', 'apple', 'snack', 'tuna'];
console.log(isChained(words));