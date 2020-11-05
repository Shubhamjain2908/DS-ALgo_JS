/**
 * Two SIgma
 * 
 * A knight is placed on a given square on an 8 x 8 chessboard. It is then moved randomly several times, where each move is a standard knight move. 
 * If the knight jumps off the board at any point, however, it is not allowed to jump back on.
    After k moves, what is the probability that the knight remains on the board?
 */

const N = 8;

// direction vector for the Knight
const dx = [1, 2, 2, 1, -1, -2, -2, -1];

const dy = [2, 1, -1, -2, -2, -1, 1, 2];

// returns true if the knight is
// inside the chessboard
const inside = (x, y) => {
    return (x >= 0 && x < N && y >= 0 && y < N);
}

const findProb = (start_x, start_y, steps) => {

    // dp array
    let dp1 = new Array(N);
    for (let i = 0; i < N; i++) {
        dp1[i] = new Array(N);
        for (let j = 0; j < N; j++) {
            dp1[i][j] = new Array(steps + 1).fill(0);
        }
    }


    // for 0 number of steps, each position
    // will have probability 1
    for (let i = 0; i < N; ++i)
        for (let j = 0; j < N; ++j)
            dp1[i][j][0] = 1;

    // for every number of steps s
    for (let s = 1; s <= steps; ++s) {

        // for every position (x, y) after
        // s number of steps
        for (let x = 0; x < N; ++x) {

            for (let y = 0; y < N; ++y) {

                let prob = 0.0;

                // for every position reachable
                // from (x, y)
                for (let i = 0; i < 8; ++i) {
                    let nx = x + dx[i];
                    let ny = y + dy[i];

                    // if this position lie
                    // inside the board
                    if (inside(nx, ny))
                        prob
                            += dp1[nx][ny][s - 1] / 8.0;
                }

                // store the result
                dp1[x][y][s] = prob;
            }
        }
    }

    // return the result
    return dp1[start_x][start_y][steps];
}

console.log(findProb(0, 0, 3));