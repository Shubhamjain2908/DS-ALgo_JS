/**
 * Twitter
 * 
 * Given a string with the initial condition of dominoes, where:
    . represents that the domino is standing still
    L represents that the domino is falling to the left side
    R represents that the domino is falling to the right side

    Figure out the final position of the dominoes. If there are dominoes that get pushed on both ends, the force cancels out and that domino remains upright.

    Example:
    Input:  ..R...L..R.
    Output: ..RR.LL..RR
 */

const findDominoes = (dominoes) => {
    let new_dominoes;
    while (true) {
        new_dominoes = dominoes.replace('R.L', '|').replace('.L', 'LL').replace('R.', 'RR').replace('|', 'R.L')
        if (new_dominoes == dominoes) {
            break;
        } else {
            dominoes = new_dominoes
        }
    }
    return dominoes;
};

const pushDominoes = (dominoes) => {
    let N = dominoes.length;
    let indexes = new Array(N + 2);
    let symbols = new Array(N + 2);
    let len = 1;
    indexes[0] = -1;
    symbols[0] = 'L';

    for (let i = 0; i < N; ++i)
        if (dominoes.charAt(i) != '.') {
            indexes[len] = i;
            symbols[len++] = dominoes.charAt(i);
        }

    indexes[len] = N;
    symbols[len++] = 'R';

    let ans = [...dominoes];
    for (let index = 0; index < len - 1; ++index) {
        let i = indexes[index], j = indexes[index + 1];
        let x = symbols[index], y = symbols[index + 1];
        if (x == y) {
            for (let k = i + 1; k < j; ++k)
                ans[k] = x;
        } else if (x > y) { // RL
            for (let k = i + 1; k < j; ++k)
                ans[k] = k - i == j - k ? '.' : k - i < j - k ? 'R' : 'L';
        }
    }

    return ans.join('');
}

const str = '..R...L..R.';
console.log(findDominoes(str));
console.log(pushDominoes(str));