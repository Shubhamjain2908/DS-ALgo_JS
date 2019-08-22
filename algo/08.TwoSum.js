function twoSum(numArray, sum) {
    let pairs = [];
    let hashTable = [];

    for (let i = 0; i < numArray.length; i++) {
        const currNum = numArray[i];
        const counterPart = sum - currNum;
        if (hashTable.indexOf(counterPart) !== -1) {
            pairs.push([ currNum, counterPart ]);
        }
        hashTable.push(currNum)
    }
    return pairs;
}

const mmm = twoSum([3, 6, 88, 65, 1, 2, 9, 7, 9, 2, 1], 9);
console.log(mmm);