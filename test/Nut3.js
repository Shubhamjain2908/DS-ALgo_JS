// positive no, no duplicates, 
const arr = [3, 4, 5, 1, 2, 6, 3, 4, 9, 10, 13]; // 1,3,5,2,4,6

const sortOddEvenArr = (arr) => {
    let oddIndex = 0, evenIndex = arr.length - 1;
    while (evenIndex > oddIndex) {
        let e1 = arr[oddIndex];
        let e2 = arr[evenIndex];
        if (e1 % 2 !== 0) {
            oddIndex++;
        }
        if (e2 % 2 === 0) {
            evenIndex--;
        }
        if (e1 % 2 === 0 && e2 % 2 !== 0) {
            arr[oddIndex] = e2;
            arr[evenIndex] = e1;
        }
    }
    return arr;
}

console.log(sortOddEvenArr(arr));