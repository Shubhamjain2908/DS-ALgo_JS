const LinkedList = require('../SinglyLinkedList');

const swapPairwiseNode = (list) => {
    let currentNode = list.head;
    while (currentNode && currentNode.next) {
        let temp = currentNode.value;
        currentNode.value = currentNode.next.value;
        currentNode.next.value = temp;
        currentNode = currentNode.next.next;
    }
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

console.log('After Swaping List:');
const reversedList = swapPairwiseNode(list);
reversedList.print();