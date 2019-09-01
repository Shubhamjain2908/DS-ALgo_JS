/**
 * Given two lists sorted in increasing order, create and return a new list representing the intersection of the two lists. 
 * The new list should be made with its own memory — the original lists should not be changed.
 * For example, let the first linked list be 1->2->3->4->6 and second linked list be 2->4->6->8, 
 * then your function should create and return a third list as 2->4->6.
 */

const LinkedList = require('../SinglyLinkedList');

const intersectedList = (list1, list2) => {
    let list = new LinkedList();
    const valueMap = new Map();
    let currentNode = list1.head;
    while (currentNode) {
        valueMap.set(currentNode.value, true);
        currentNode = currentNode.next;
    }
    currentNode = list2.head;
    while (currentNode) {
        const value = currentNode.value;
        if (valueMap.has(value)) {
            list.addToTail(value);
        }
        currentNode = currentNode.next;
    }
    return list;
}

// 1->2->3->4->6
const list1 = new LinkedList();
list1.addToHead(6);
list1.addToHead(4);
list1.addToHead(3);
list1.addToHead(2);
list1.addToHead(1);

// 2->4->6->8
const list2 = new LinkedList();
list2.addToHead(8);
list2.addToHead(6);
list2.addToHead(4);
list2.addToHead(2);

console.log('List 1:');
list1.print();

console.log('List 2:');
list2.print();

const newList = intersectedList(list1, list2);
console.log('Intersected linked list:');
newList.print();