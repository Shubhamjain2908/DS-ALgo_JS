const LinkedList = require('../SinglyLinkedList');

const detectLoop = (list) => {
    const map = new Map();
    let currentNode = list.head;
    while (currentNode) {
        const value = currentNode.value;
        if (map.has(value)) {
            return true;
        } else {
            map.set(value, true);
        }
        currentNode = currentNode.next;
    }
    return false;
}

const list = new LinkedList();
list.addToHead(1);
list.addToHead(2);
list.addToHead(3);
list.addToHead(4);
list.addToHead(5);
list.addToHead(3);
list.print();
console.log(detectLoop(list));