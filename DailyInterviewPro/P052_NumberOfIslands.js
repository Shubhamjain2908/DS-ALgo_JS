/**
 * LinkedIn
 *
 * Given a 2-dimensional grid consisting of 1's (land blocks) and 0's (water blocks), count the number of islands present in the grid. The definition of an island is as follows:
1.) Must be surrounded by water blocks.
2.) Consists of land blocks (1's) connected to adjacent land blocks (either vertically or horizontally).
Assume all edges outside of the grid are water.
    Example:
        Input:
            10001
            11000
            10110
            00000

        Output: 3
 */

// A function to check if a given cell (row, col) can be included in DFS 
const isSafe = (M, row, col, visited) => {
    // row number is in range, column number is in range & value is 1 and not yet visited 
    return (row >= 0) && (row < M.length) && (col >= 0) && (col < M[0].length) && (M[row][col] == 1 && !visited[row][col]);
}

// A utility function to do DFS for a 2D boolean matrix. It only considers the 8 neighbors as adjacent vertices 
const DFS = (M, row, col, visited) => {
    // These arrays are used to get row and column numbers of 8 neighbors of a given cell 
    let rowNbr = [-1, -1, -1, 0, 0, 1, 1, 1];
    let colNbr = [-1, 0, 1, -1, 1, -1, 0, 1];

    // Mark this cell as visited 
    visited[row][col] = true;

    // Recur for all connected neighbours 
    for (let k = 0; k < 8; ++k) {
        if (isSafe(M, row + rowNbr[k], col + colNbr[k], visited)) {
            DFS(M, row + rowNbr[k], col + colNbr[k], visited);
        }
    }
}

// The main function that returns count of islands in a given boolean 2D matrix 
const noOfIsland = grid => {
    let ROW = grid.length;
    let COL = grid[0].length;
    // Make a bool array to mark visited cells. 
    // Initially all cells are unvisited 
    let visited = new Array(ROW).fill(new Array(COL).fill(false));

    // Initialize count as 0 and travese through the all cells 
    // of given matrix 
    let count = 0;
    for (let i = 0; i < ROW; ++i) {
        for (let j = 0; j < COL; ++j) {
            // If a cell with value 1 is not 
            if (grid[i][j] == 1 && !visited[i][j]) {
                // visited yet, then new island found, Visit all 
                // cells in this island and increment island count 
                DFS(grid, i, j, visited);
                ++count;
            }
        }
    }
    return count;
}

const grid = [
    [1, 1, 0, 0, 0],
    [0, 1, 0, 0, 1],
    [1, 0, 0, 1, 1],
    [0, 0, 0, 0, 0]
]
console.log(noOfIsland(grid));