/**
 * Twitter
 * 
 * Implement a class for a stack that supports all the regular functions (push, pop) and an additional function of max() which 
 * returns the maximum element in the stack (return None if the stack is empty). 
 * Each method should run in constant time.
 */

function MyStack() {
    this.arr = [];
    this.min = [];
    this.max = [];
}

MyStack.prototype.push = function (x) {
    if (this.arr.length === 0) {
        this.arr.push(x);
        this.min.push(x);
        this.max.push(x);
    }
    else {
        this.arr.push(x);
        let y = this.min.pop();
        this.min.push(y);
        if (x < y) {
            this.min.push(x);
        }
        else {
            this.min.push(y);
        }
        let z = this.max.pop();
        this.max.push(z);
        if (x < z) {
            this.max.push(z);
        } else {
            this.max.push(x);
        }
    }
}

MyStack.prototype.pop = function () {
    let x = this.arr.pop();
    this.min.pop();
    this.max.pop();
    return x;
}

MyStack.prototype.minElement = function () {
    let x = this.min.pop();
    this.min.push(x);
    return x;
}

MyStack.prototype.maxElement = function () {
    let x = this.max.pop();
    this.max.push(x);
    return x;
}

let st = new MyStack();
st.push(2);
st.push(3);
st.push(4);
st.push(5);
st.push(6);
st.push(1);
// st.pop();
console.log(st);
console.log(st.minElement());
console.log(st.maxElement());