/**
 * Amazon
 * 
 * You are given a 2D array of characters, and a target string. Return whether or not the word target word exists in the matrix. 
 * Unlike a standard word search, the word must be either going left-to-right, or top-to-bottom in the matrix.
 * Example:
    [['F', 'A', 'C', 'I'],
    ['O', 'B', 'Q', 'P'],
    ['A', 'N', 'O', 'B'],
    ['M', 'A', 'S', 'S']]
    Given this matrix, and the target word FOAM, you should return true, as it can be found going up-to-down in the first column.
 */

const wordSearch = (matrix, word) => {
    let row, col;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            row += matrix[i][j];
            col += matrix[j][i];
        }
        if (row.includes(word) || col.includes(word)) {
            return true;
        }
    }
    return false;
}

const matrix = [['F', 'A', 'C', 'I'],
['O', 'B', 'Q', 'P'],
['A', 'N', 'O', 'B'],
['M', 'A', 'S', 'S']];
const word = 'IPBS';

console.log(wordSearch(matrix, word));