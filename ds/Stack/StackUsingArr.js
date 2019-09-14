function Stack() {
    this.arr = [];
}

Stack.prototype.push = function (value) {
    this.arr.push(value);
}

Stack.prototype.pop = function () {
    return this.arr.pop();
}

Stack.prototype.isEmpty = function () {
    return this.arr.length === 0;
}

Stack.prototype.peek = function () {
    return this.arr[this.arr.length - 1];
}

Stack.prototype.print = function () {
    console.log(this.arr);
}

module.exports = Stack;