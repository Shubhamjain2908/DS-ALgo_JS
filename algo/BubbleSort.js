function bubbleSort(array) {
    let j = 0;
    for (let i = 0; i < array.length - 1 - j; i++) {
        if (array[i] > array[i + 1]) {
            array[i] = array[i] + array[i + 1];
            array[i + 1] = array[i] - array[i + 1];
            array[i] = array[i] - array[i + 1];
        }
    }

    for (let i = array.length; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (array[j] > array[j + 1]) {
                array[j] = array[j] + array[j + 1];
                array[j + 1] = array[j] - array[j + 1];
                array[j] = array[j] - array[j + 1];
            }
        }
    }
    return array;
}

console.log(bubbleSort([5, 3, 8, 2, 1, 4]));