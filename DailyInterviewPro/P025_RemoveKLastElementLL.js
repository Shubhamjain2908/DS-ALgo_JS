/**
 * AirBNB
 *
 * You are given a singly linked list and an integer k. Return the linked list, removing the k-th last element from the list.
    ^^^Try to do it in a single pass and using constant space.
 */

const LinkedList = require('../ds/LinkedList/SinglyLinkedList/SinglyLinkedList');

const removeKNode = (list, k) => {
    let first = list.head;
    let second = list.head;
    for (let i = 0; i < k; i++) {
        if (second.next == null) {
            if (i === k - 1)
                list.head = list.head.next;
            return;
        }
        second = second.next;
    }
    while (second.next != null) {
        first = first.next;
        second = second.next;
    }
    first.next = first.next.next;
    return list;
}

// 10 -> 5 -> 3 -> 7 -> 1 -> 4 -> 2
let list = new LinkedList();
list.addToTail(10);
list.addToTail(5);
list.addToTail(3);
list.addToTail(7);
list.addToTail(1);
list.addToTail(4);
list.addToTail(2);
list.print();
removeKNode(list, 3);
list.print();
// console.log(list);