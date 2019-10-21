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

    let maxClassCount = 0, currentClassCount = 0;
    for (let i = minTime; i < maxTime; i++) {
        if (startTimes[i]) {
            currentClassCount += startTimes[i];
            if (currentClassCount > maxClassCount) {
                maxClassCount = currentClassCount;
            }
        }
        if (endTimes[i]) {
            currentClassCount -= endTimes[i];
        }
    }

    return maxClassCount;

}

const intervals = [[30, 75], [0, 50], [60, 150]];
console.log(noOfRooms(intervals));

const intervals2 = [[30, 75], [0, 50], [10, 60], [60, 150]];
console.log(noOfRooms(intervals2));

const intervals3 = [[2, 15], [36, 45], [9, 29], [16, 23], [4, 9]];
console.log(noOfRooms(intervals3));