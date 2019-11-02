/**
 * Uber
 * 
 * Design a simple stack that supports push, pop, top, and retrieving the minimum element in constant time.

    push(x) -- Push element x onto stack.
    pop() -- Removes the element on top of the stack.
    top() -- Get the top element.
    getMin() -- Retrieve the minimum element in the stack.

    Note: be sure that pop() and top() handle being called on an empty stack.

    x = minStack()
    x.push(-2)
    x.push(0)
    x.push(-3)
    print(x.getMin())
    # -3
    x.pop()
    print(x.top())
    # 0
    print(x.getMin())
    # -2
 */

class MinStack {
    constructor() {
        this.stack = [];
        this.minValue = Number.MAX_SAFE_INTEGER;
    }

    push(x) {
        if (this.isEmpty()) {
            this.minValue = x;
            this.stack.push(x);
            return;
        }
        if (x < this.minValue) {
            this.stack.push(2 * x - this.minValue);
            this.minValue = x;
        } else {
            this.stack.push(x);
        }
    }

    pop() {
        if (this.isEmpty()) {
            console.log('Stack is empty');
            return;
        }
        let t = this.stack.pop();

        // Minimum will change as the minimum element of the stack is being removed. 
        if (t < this.minValue) {
            this.minValue = 2 * this.minValue - t;
        }
        return t;
    }

    top() {
        if (this.isEmpty()) {
            console.log('Stack is empty ');
            return;
        }
        return this.stack[this.stack.length - 1];
    }

    getMin() {
        if (this.isEmpty()) {
            console.log('Stack is empty ');
            return;
        }
        return this.minValue;
    }

    isEmpty() {
        return this.stack.length === 0;
    }
}

let myStack = new MinStack();
myStack.push(-2);
myStack.push(0);
myStack.push(-3);
console.log(myStack.getMin());  // -3
myStack.pop();
console.log(myStack.top()); // 0
console.log(myStack.getMin());  // -2