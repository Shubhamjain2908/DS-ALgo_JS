const LinkedList = require('../SinglyLinkedList');

const middleNode = (list) => {
    let aNode = bNode = list.head;
    while (bNode && bNode.next) {
        aNode = aNode.next;
        bNode = bNode.next.next;
    }
    return aNode;
}

const list = new LinkedList();
list.addToHead(1);
list.addToHead(2);
list.addToHead(3);
list.addToHead(4);
list.addToHead(5);
list.print();
console.log(middleNode(list));