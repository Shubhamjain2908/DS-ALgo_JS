/**
 * Uber
 * 
 * Given a linked list, determine if the linked list has a cycle in it. For notation purposes, we use an integer pos which represents the zero-indexed position where the tail connects to.

    Example: 
        Input: head = [4,3,2,1,0], pos = 1.  
        Output: true
    The example indicates a list where the tail connects to the second node.
 */

const LinkedList = require('../ds/LinkedList/SinglyLinkedList/SinglyLinkedList');

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