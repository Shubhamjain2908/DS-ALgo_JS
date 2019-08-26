const LinkedList = require('../SinglyLinkedList');

const loopNode = (list) => {
    const map = new Map();
    let currentNode = list.head;
    while (currentNode) {
        const value = currentNode.value;
        if (map.has(value)) {
            return map.get(value);
        } else {
            map.set(value, currentNode);
        }
        currentNode = currentNode.next;
    }
    return null;
}

const lengthOfLoop = (list) => {
    let lNode = loopNode(list);
    let loopValue = lNode.value;
    let counter = 0;
    while (lNode) {
        const value = lNode.next.value;
        if (loopValue === value) {
            counter++;
            return counter;
        }
        counter++;
        lNode = lNode.next;
    }
    return counter;
}

// 1->2->3->4->5->2
const list = new LinkedList();
list.addToHead(2);
list.addToHead(5);
list.addToHead(4);
list.addToHead(3);
list.addToHead(2);
list.addToHead(1);
list.print();

console.log(lengthOfLoop(list));