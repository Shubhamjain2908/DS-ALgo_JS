const mergeSortedArrays = (arr1, arr2) => {
    let arr = [];
    let arr1Item = arr1[0];
    let arr2Item = arr2[0];
    let i = j = 1;
    if (arr1.length === 0) {
        return arr2;
    }
    if (arr2.length === 0) {
        return arr1;
    }
    while (arr1Item || arr2Item) {
        let minElem;
        if (arr2Item === undefined || arr1Item < arr2Item) {
            minElem = arr1Item;
            arr1Item = arr1[i];
            i++;
        } else {
            minElem = arr2Item;
            arr2Item = arr2[j];
            j++;
        }
        arr.push(minElem);
    }
    return arr;
}

const arr1 = [0, 3, 4, 31];
const arr2 = [4, 6, 30];

console.log(mergeSortedArrays(arr1, arr2)); // [0, 3, 4