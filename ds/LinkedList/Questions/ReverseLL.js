const LinkedList = require('../SinglyLinkedList');

const reverseList = (list) => {
    let prev = null;
    let current = list.head;
    let next = null;
    while (current) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    list.head = prev;
    return list;
}

const list = new LinkedList();
list.addToHead(1);
list.addToHead(2);
list.addToHead(3);
list.addToHead(4);
list.addToHead(5);

console.log('Initial List:');
list.print();

console.log('Reverse List:');
const reversedList = reverseList(list);
reversedList.print();