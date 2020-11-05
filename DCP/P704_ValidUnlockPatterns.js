/**
 * Uber
 *
 * One way to unlock an Android phone is through a pattern of swipes across a 1-9 keypad.
    For a pattern to be valid, it must satisfy the following:

    - All of its keys must be distinct.
    - It must not connect two keys by jumping over a third key, unless that key has already been used.
    For example, 4 - 2 - 1 - 7 is a valid pattern, whereas 2 - 1 - 7 is not.

    Find the total number of valid unlock patterns of length N, where 1 <= N <= 9.
 */

let DOTS = 10;

// method to find total pattern starting from current cell 
const totalPatternFromCur = (visit, jump, cur, toTouch) => {
    if (toTouch <= 0) {
        // if last cell then return 1 way 
        return (toTouch == 0) ? 1 : 0;
    }

    let ways = 0;

    // make this cell visited before 
    // going to next call 
    visit[cur] = true;

    for (let i = 1; i < DOTS; i++) {

        /* if this cell is not visit AND 
            either i and cur are adjacent (then jump[i][cur] = 0) 
            or between cell must be visit already ( 
            then visit[jump[i][cur]] = 1) */
        if (!visit[i] && (jump[i][cur] == 0 ||
            visit[jump[i][cur]]))
            ways += totalPatternFromCur(visit, jump,
                i, toTouch - 1);
    }

    // make this cell not visited 
    // after returning from call 
    visit[cur] = false;

    return ways;
}

// method returns number of pattern with 
// minimum m connection and maximum n connection 
const waysOfConnection = (m, n) => {
    let jump = new Array(DOTS);
    for (let i = 0; i < DOTS; i++) {
        jump[i] = new Array(DOTS).fill(0);
    }

    // 2 lies between 1 and 3 
    jump[1][3] = jump[3][1] = 2;

    // 8 lies between 7 and 9 
    jump[7][9] = jump[9][7] = 8;

    // 4 lies between 1 and 7 
    jump[1][7] = jump[7][1] = 4;

    // 6 lies between 3 and 9 
    jump[3][9] = jump[9][3] = 6;

    // 5 lies between 1, 9 2, 8 3, 7 and 4, 6 
    jump[1][9] = jump[9][1] = jump[2][8] =
        jump[8][2] = jump[3][7] =
        jump[7][3] = jump[4][6] =
        jump[6][4] = 5;

    let visit = new Array(DOTS).fill(false);
    let ways = 0;
    for (let i = m; i <= n; i++) {
        // 1, 3, 7, 9 are symmetric so multiplying by 4 
        ways += 4 * totalPatternFromCur(visit,
            jump, 1, i - 1);

        // 2, 4, 6, 8 are symmetric so multiplying by 4 
        ways += 4 * totalPatternFromCur(visit,
            jump, 2, i - 1);

        ways += totalPatternFromCur(visit,
            jump, 5, i - 1);
    }
    return ways;
}

let minConnect = 2;
let maxConnect = 9;

console.log(waysOfConnection(minConnect,
    maxConnect)); 