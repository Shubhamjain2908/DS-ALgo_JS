/**
 * Google
 * 
 * You are given an array of tuples (start, end) representing time intervals for lectures. The intervals may be overlapping. Return the number of rooms that are required.
    For example. [[30, 75], [0, 50], [60, 150]] should return 2.
 */

const noOfRooms = intervals => {

    let startTimes = {};
    let endTimes = {};
    let minTime = Number.MAX_SAFE_INTEGER, maxTime = Number.MIN_SAFE_INTEGER;
    intervals.forEach(elem => {
        let start = elem[0], end = elem[1];
        if (minTime > start) {
            minTime = start;
        }
        if (maxTime < end) {
            maxTime = end;
        }
        !startTimes[start] ? startTimes[start] = 1 : startTimes[start] += 1;
        !endTimes[end] ? endTimes[end] = 1 : endTimes[end] += 1;
    });

    let max_class_count = 0, current_class_count = 0;
    for (let i = minTime; i < maxTime; i++) {
        if (startTimes[i]) {
            current_class_count += startTimes[i];
            if (current_class_count > max_class_count) {
                max_class_count = current_class_count;
            }
        }
        if (endTimes[i]) {
            current_class_count -= endTimes[i];
        }
    }

    return max_class_count;

}

const intervals = [[30, 75], [0, 50], [60, 150]];
console.log(noOfRooms(intervals));

const intervals2 = [[30, 75], [0, 50], [10, 60], [60, 150]];
console.log(noOfRooms(intervals2));

const intervals3 = [[2, 15], [36, 45], [9, 29], [16, 23], [4, 9]];
console.log(noOfRooms(intervals3));