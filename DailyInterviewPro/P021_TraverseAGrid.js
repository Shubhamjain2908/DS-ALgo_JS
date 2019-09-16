/**
 * Microsoft
 *
 * You 2 integers n and m representing an n by m grid, determine the number of ways you can get from the top-left to the bottom-right of the matrix y going only right or down.
    Example:
    n = 2, m = 2

    This should return 2, since the only possible routes are:
    Right, down
    Down, right.
 */

/**
 * Recursive solution - Has overlapping subproblems
 * @param {Number} m 
 * @param {Number} n 
 * @returns {Number} ways
 */
const traverseGrid = (m, n) => {
    if (m == 1 || n == 1)
        return 1;
    // If diagonal movements are allowed then the last addition is required. 
    return traverseGrid(m - 1, n) + traverseGrid(m, n - 1);
    // + numberOfPaths(m-1, n-1); 
}

/**
  * Dynamic Programming solution - Efficient Solution
  * @param {Number} m 
  * @param {Number} n 
  * @returns {Number} ways
  */
const traverseGridDP = (m, n) => {

    let cache = new Array(n).fill(new Array(m));

    for (let i = 0; i < m; i++) {
        cache[i][0] = 1;
    }
    for (let i = 0; i < n; i++) {
        cache[0][i] = 1;
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            cache[i][j] = cache[i - 1][j] + cache[i][j - 1];
        }

    }
    return cache[m - 1][n - 1];

}

const m = 2, n = 2;
console.log(traverseGrid(n, m));
console.log(traverseGridDP(n, m));
