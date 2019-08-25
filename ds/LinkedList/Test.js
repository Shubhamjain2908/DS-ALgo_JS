const LinkedList = require('./DoublyLinkedList');

var ll = new LinkedList();

ll.addToHead(100);
ll.addToHead(200);
ll.addToHead(300);

console.log(ll.removeHead());

ll.addToTail(700);
ll.addToTail(800);
ll.addToTail(800);
ll.addToTail(900);
ll.addToTail(800);
ll.addToTail(800);
console.log(ll.removeTail());

console.log('Search => ', ll.search(800))
console.log('Index => ', ll.indexOf(800))
// console.log(ll);