class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    peek() {
        return this.top;
    }
    push(value) {
        const newNode = new Node(value);
        if (!this.top) {
            this.top = this.bottom = newNode;
        } else {
            const currentTop = this.top;
            this.top = newNode;
            this.top.next = currentTop;
        }
        this.length++;
    }
    pop() {
        if (!this.top) {
            return null;
        }
        if (this.top === this.bottom) {
            this.bottom = null;
        }
        const currentTop = this.top;
        this.top = this.top.next;
        this.length--;
        return currentTop;
    }
    isEmpty() {
        return this.length === 0;
    }
}

module.exports = Stack;