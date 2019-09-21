/**
 * Uber
 *
 * Given a linked list of integers, remove all consecutive nodes that sum up to 0.
    Example:
        Input: 10 -> 5 -> -3 -> -3 -> 1 -> 4 -> -4
        Output: 10
    The consecutive nodes 5 -> -3 -> -3 -> 1 sums up to 0 so that sequence should be removed. 4 -> -4 also sums up to 0 too so that sequence should also be removed.
 */

const LinkedList = require('../ds/LinkedList/SinglyLinkedList/SinglyLinkedList');

const removeConsecutiveNode = (list) => {

}

let list = new LinkedList();
list.addToTail(10);
list.addToTail(5);
list.addToTail(-3);
list.addToTail(-3);
list.addToTail(1);
list.addToTail(4);
list.addToTail(-4);
console.log(list);