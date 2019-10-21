/**
 * Google
 * 
 * You are given a stream of numbers. Compute the median for each new element .
    Eg. Given [2, 1, 4, 7, 2, 0, 5], the algorithm should output [2, 1.5, 2, 3.0, 2, 2, 2]
 */

const calculateMedian = arr => {
    const sorted = arr.sort((a, b) => a - b)

    if (sorted.length == 0) return 0

    if (sorted.length == 1) return sorted[0]

    if (sorted.length % 2 == 0) {
        const firstIndex = sorted.length / 2
        const secondIndex = firstIndex - 1
        return ((sorted[firstIndex] + sorted[secondIndex]) / 2)
    } else {
        const middleIndex = Math.floor(sorted.length / 2)
        return (sorted[middleIndex])
    }
}

const runningMedian = (array) => {
    array.forEach((el, index, ar) => {
        const currentStreamedArray = ar.slice(0, index + 1)
        console.log(calculateMedian(currentStreamedArray))  //2, 1.5, 2, 3.5, 2, 2, 2
    })
}

const arr = [2, 1, 4, 7, 2, 0, 5];
runningMedian(arr);