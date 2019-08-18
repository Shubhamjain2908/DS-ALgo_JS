(function () {
    var x = y = 200;    // declaring y as a global variable.
})();

console.log('Y : ', y); // 200
console.log('X : ', x); // throw error