function meanMedianMode(array) {
    const mean = getMean(array);
    const median = getMedian(array);
    const mode = getMode(array);

    return {
        mean,
        median,
        mode
    }
}
function getMean(array) {
    let sum = 0;
    array.forEach(num => {
        sum += num;
    });
    return sum / array.length;
}
function getMedian(array) {
    array.sort((a, b) => { return a - b; });
    let median;
    const n = array.length;
    if (n % 2 == 0) {
        median = array[n / 2];
    } else {
        const m1 = array[Math.floor((n / 2) - 1)];
        const m2 = array[Math.floor(n / 2)];
        median = (m1 + m2) / 2;
    }
    return median;
}
function getMode(array) {
    let modeObj = {};

    array.forEach(num => {
        if (!modeObj[num]) {
            modeObj[num] = 0;
        }
        modeObj[num]++;
    });

    let maxFrequency = 0;
    let modes = [];
    for (const num in modeObj) {
        if (modeObj[num] > maxFrequency) {
            modes = [num];
            maxFrequency = modeObj[num];
        } else if (modeObj[num] === maxFrequency) {
            modes.push(num);
        }
    }
    if (modes.length === Object.keys(modeObj).length) {
        modes = [];
    }
    return modes;
}
const mmm = meanMedianMode([3, 6, 88, 65, 1, 2, 9, 7, 9, 2, 1]);
console.log(mmm);