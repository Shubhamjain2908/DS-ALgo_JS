/**
 * Apple
 * 
 * Implement a queue class using two stacks. A queue is a data structure that supports the FIFO protocol (First in = first out). 
 * Your class should support the enqueue and dequeue methods like a standard queue.
 */

class Queue {
    constructor() {
        this.arr1 = [];
        this.arr2 = [];
    }
    enqueue(value) {
        this.arr1.push(value);
    }
    dequeue() {
        if (this.arr2.length === 0) {
            if (this.arr1.length === 0) {
                return 'Cannot dequeue because queue is empty';
            }
            while (this.arr1.length > 0) {
                this.arr2.push(this.arr1.pop());
            }
        }
        return this.arr2.pop();
    }
    getQueue() {
        return [...this.arr1, ...this.arr2.reverse()];
    }
}

let q = new Queue();
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
console.log(q.dequeue());
console.log(q.getQueue());