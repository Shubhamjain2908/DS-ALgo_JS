/**
 * Microsoft
 * 
 * You are given an array of intervals - that is, an array of tuples (start, end). 
 * The array may not be sorted, and could contain overlapping intervals. Return another array where the overlapping intervals are merged.
    For example:
    [(1, 3), (5, 8), (4, 10), (20, 25)]

    This input should return [(1, 3), (4, 10), (20, 25)] since (5, 8) and (4, 10) can be merged into (4, 10).
 */

const mergeInterval = (intervals) => {
    // Sort the interval
    intervals.sort((a, b) => a[0] - b[0]);
    let stack = [intervals[0]];
    for (let i = 0; i < intervals.length; i++) {
        const e = intervals[i];
        let top = stack[stack.length - 1];
        if (top[1] < e[0]) {
            stack.push(e);
        } else if (top[1] < e[1]) {
            top[1] = e[1];
            stack.pop();
            stack.push(top);
        }
    }
    return stack;
}

const intervals = [[1, 3], [5, 8], [4, 10], [20, 25]];
console.log(mergeInterval(intervals));