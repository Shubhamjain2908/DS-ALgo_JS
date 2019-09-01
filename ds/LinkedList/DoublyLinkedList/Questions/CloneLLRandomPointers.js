const LinkedList = require('../DoublyLinkedList');

// 1 -> 2 ->3 -> 4 
const list = new LinkedList();
list.addToHead(4);
list.addToHead(3);
list.addToHead(2);
list.addToHead(1);
console.log(list);