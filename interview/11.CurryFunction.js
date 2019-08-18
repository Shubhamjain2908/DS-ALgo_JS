function getProduct(num1, num2) {
    return num1 * num2;
}

console.log(getProduct(20, 39));

const getProductCurry = num1 => num2 => num1 * num2;

console.log(getProductCurry(20)(39));

// function getTravelTime(distance, speed) {
//     return distance / speed;
// }
// console.log(getTravelTime(600, 50));

function getTravelTime(distance) {
    return function (speed) {
        return distance / speed;
    }
}

const travelTimeBosNyc = getTravelTime(400);
const travelTimeMiamiAtlanta = getTravelTime(600);

console.log(travelTimeBosNyc(50))
