/**
 * Microsoft
 * 
 * You are given a doubly linked list. Determine if it is a palindrome. 

    ^^^Can you do this for a singly linked list?
 */

const DoublyLinkedList = require('../ds/LinkedList/DoublyLinkedList/DoublyLinkedList');

const isPalin = list => {
    let head = list.head;
    let tail = list.tail;
    while (head && tail && head !== tail) {
        if (head.value !== tail.value) {
            return false;
        }
        head = head.next;
        tail = tail.prev;
    }
    return true;
}

// a <-> b <-> b <-> a
let list = new DoublyLinkedList();
list.addToTail('a');
list.addToTail('b');
list.addToTail('b');
list.addToTail('a');
console.log(isPalin(list));