class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    peek() {
        return this.first ? this.first.value : null;
    }
    enqueue(value) {
        const newNode = new Node(value);
        if (!this.last) {
            this.last = this.first = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
    }
    dequeue() {
        if (!this.first) {
            return null;
        }
        if (this.first === this.last) {
            this.last = null;
        }
        const currentFirst = this.first;
        this.first = this.first.next;
        this.length--;
        return currentFirst.value;
    }
    isEmpty() {
        return this.length === 0;
    }
}

module.exports = Queue;