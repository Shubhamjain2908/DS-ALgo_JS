/**
 * Apple
 *
 * You are given two singly linked lists. The lists intersect at some node. Find, and return the node. Note: the lists are non-cyclical.
    Example:
    A = 1 -> 2 -> 3 -> 4
    B = 6 -> 3 -> 4
    This should return 3 (you may assume that any nodes with the same value are the same node).
 */

const LinkedList = require('../ds/LinkedList/SinglyLinkedList/SinglyLinkedList');

/**
 * O(m+n) time complexity & O(m) space
 * @param {Linked List 1} list1 
 * @param {Linked List 2} list2
 * @returns {List Node} node 
 */
const intersectedPointHashing = (list1, list2) => {
    let listMap = new Map();
    let currentNode1 = list1.head;
    while (currentNode1) {
        listMap.set(currentNode1.value, true);
        currentNode1 = currentNode1.next;
    }
    let currentNode2 = list2.head;
    while (currentNode2) {
        if (listMap.has(currentNode2.value)) {
            return currentNode2;
        }
        currentNode2 = currentNode2.next;
    }
}

/**
 * O(m+n) time complexity & O(1) space
 * @param {Linked List 1} list1 
 * @param {Linked List 2} list2
 * @returns {List Node} node 
 */
// const intersectedPointTrue = (list1, list2) => {
//     let currentNode = list1.head;
//     while (currentNode) {
//         currentNode.isVisited = true;
//         currentNode = currentNode.next;
//     }
//     currentNode = list2.head;
//     while (currentNode) {
//         if (currentNode.isVisited) {
//             // delete currentNode.isVisited; // not recomended
//             return currentNode;
//         }
//         currentNode = currentNode.next;
//     }
//     return null;
// }

let list1 = new LinkedList();
list1.addToHead(4);
list1.addToHead(3);
list1.addToHead(2);
list1.addToHead(1);
let list2 = new LinkedList();
list2.addToHead(4);
list2.addToHead(3);
list2.addToHead(6);
list1.print();
list2.print();

console.log(intersectedPointHashing(list1, list2));
// console.log(intersectedPointTrue(list1, list2));