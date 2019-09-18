const binarySearch = (arr, k) => {
    if (!arr || arr.length === 0 || arr.length === 1 && arr[0] !== k) {
        return false;
    }
    let mid = Math.floor(arr.length / 2);
    if (arr[mid] === k) {
        return true;
    } else if (k < arr[mid]) {
        return binarySearch(arr.slice(0, mid), k);
    } else {
        return binarySearch(arr.slice(mid), k);
    }
}

const arr = [0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283];
console.log(binarySearch(arr, 63));