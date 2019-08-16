function binarySearch(numArray, key) {
    const length = numArray.length;
    const midIndex = Math.floor(length / 2);
    const midElem = numArray[midIndex];
    if (midElem === key) {
        return true;
    } else if (midElem < key && length > 1) {
        return binarySearch(numArray.splice(midIndex, length), key)
    } else if (midElem > key && length > 1) {
        return binarySearch(numArray.splice(0, midIndex), key)
    } else {
        return false;
    }
}

console.log(binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 56));