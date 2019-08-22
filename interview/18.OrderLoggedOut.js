function logNumbers() {
    console.log(1);
    setTimeout(() => console.log(2), 1000);
    setTimeout(() => console.log(3), 0);
    console.log(4);
}

// event loop

logNumbers();

// 1, 4, 3, 2