const LinkedList = require('../SinglyLinkedList');

const moveLastToFirst = (list) => {
    let lastNode = list.head;
    let secondLast = null;
    while (lastNode.next) {
        secondLast = lastNode;
        lastNode = lastNode.next;
    }
    secondLast.next = null;
    lastNode.next = list.head;
    list.head = lastNode;
    return list;
}

// 6->5->4->3->2->1
const list = new LinkedList();
list.addToHead(6);
list.addToHead(5);
list.addToHead(4);
list.addToHead(3);
list.addToHead(2);
list.addToHead(1);

console.log('Initial List:');
list.print();

console.log('After Moving last to first:');
moveLastToFirst(list);
list.print();