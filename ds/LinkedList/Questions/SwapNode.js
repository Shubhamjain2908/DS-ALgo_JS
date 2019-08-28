const LinkedList = require('../SinglyLinkedList');

const swapNode = (list, key1, key2) => {
    let currentNode = list.head;
    let firstNode;
    let secondNode;
    while (currentNode) {
        let curval = currentNode.value;
        if (curval === key1) {
            firstNode = currentNode;
        } else if (curval === key2) {
            secondNode = currentNode;
        }
        currentNode = currentNode.next;
    }
    if (firstNode && secondNode) {
        let temp = firstNode.next;
        firstNode.next = secondNode.next;
        secondNode.next = temp;
        temp = firstNode.next.next;
        firstNode.next.next = secondNode.next.next;
        secondNode.next.next = temp;
    }
    return list;
}

// 10->15->12->13->20->14
const list = new LinkedList();
list.addToHead(14);
list.addToHead(20);
list.addToHead(13);
list.addToHead(12);
list.addToHead(15);
list.addToHead(10);

console.log('Initial List:');
list.print();

console.log('After Swaping List:');
const reversedList = swapNode(list, 12, 20);
reversedList.print();