/**
 * There are two singly linked lists in a system. By some programming error, the end node of one of the linked list got linked to the second list
 *  forming an inverted Y shaped list. Write a program to get the point where two linked list merge.
 */

const LinkedList = require('../SinglyLinkedList');

/**
 * O(m+n) time complexity & O(m) space
 * @param {Linked List 1} list1 
 * @param {Linked List 2} list2
 * @returns {List Node} node 
 */
const intersectedPointHashing = (list1, list2) => {
    const valueMap = new Map();
    let currentNode = list1.head;
    while (currentNode) {
        valueMap.set(currentNode, true);
        currentNode = currentNode.next;
    }
    currentNode = list2.head;
    while (currentNode) {
        if (valueMap.has(currentNode)) {
            return currentNode;
        }
        currentNode = currentNode.next;
    }
    return null;
}

/**
 * O(m+n) time complexity & O(1) space
 * @param {Linked List 1} list1 
 * @param {Linked List 2} list2
 * @returns {List Node} node 
 */
const intersectedPointTrue = (list1, list2) => {
    let currentNode = list1.head;
    while (currentNode) {
        currentNode.isVisited = true;
        currentNode = currentNode.next;
    }
    currentNode = list2.head;
    while (currentNode) {
        if (currentNode.isVisited) {
            // delete currentNode.isVisited; // not recomended
            return currentNode;
        }
        currentNode = currentNode.next;
    }
    return null;
}

// 1->2->3->4->6->7
const list1 = new LinkedList();
list1.addToHead(7);
list1.addToHead(6);
list1.addToHead(4);
list1.addToHead(3);
list1.addToHead(2);
list1.addToHead(1);

// 10->9->8->7
const list2 = new LinkedList();
list2.addToHead(7);
list2.addToHead(8);
list2.addToHead(9);
list2.addToHead(10);
list2.head.next.next.next = list1.head.next.next.next.next.next;

console.log('List 1:');
list1.print();

console.log('List 2:');
list2.print();

const point = intersectedPointHashing(list1, list2);
const point2 = intersectedPointTrue(list1, list2);
console.log('Intersected point:', point, point2);