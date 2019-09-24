/**
 * Amazon
 *
 * You are given a 2D array of integers. Print out the clockwise spiral traversal of the matrix.
    Example:
        grid = [[1,  2,  3,  4,  5],
                [6,  7,  8,  9,  10],
                [11, 12, 13, 14, 15],
                [16, 17, 18, 19, 20]]

        The clockwise spiral traversal of this array is:

        1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16, 11, 6, 7, 8, 9, 14, 13, 12
 */

const printClockwise = (grid) => {

    /*  k - starting row index 
        m - ending row index 
        l - starting column index 
        n - ending column index 
        i - iterator 
    */
    let i, k = 0, l = 0, m = grid.length, n = grid[0].length;
    let arr = [];
    while (k < m && l < n) {

        // Print the first row from the remaining rows 
        for (i = l; i < n; ++i) {
            arr.push(grid[k][i]);
        }
        k++;

        // Print the last column from the remaining columns 
        for (i = k; i < m; ++i) {
            arr.push(grid[i][n - 1]);
        }
        n--;

        // Print the last row from the remaining rows */ 
        if (k < m) {
            for (i = n - 1; i >= l; --i) {
                arr.push(grid[m - 1][i]);
            }
            m--;
        }

        // Print the first column from the remaining columns */ 
        if (l < n) {
            for (i = m - 1; i >= k; --i) {
                arr.push(grid[i][l]);
            }
            l++;
        }
    }
    console.log(arr);
}

const grid = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20]
];
printClockwise(grid);