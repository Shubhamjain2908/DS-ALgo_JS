const LinkedList = require('../SinglyLinkedList');

const removeDuplicate = (list) => {
    let nodeMap = new Map();
    let currentNode = list.head;
    let prev = null;
    while (currentNode) {
        let curval = currentNode.value;
        if (nodeMap.has(curval)) {
            prev.next = currentNode.next;
        } else {
            nodeMap.set(curval, true);
            prev = currentNode;
        }
        currentNode = currentNode.next;
    }
    return list;
}

// 12->11->12->21->41->43->21
const list = new LinkedList();
list.addToHead(21);
list.addToHead(43);
list.addToHead(41);
list.addToHead(21);
list.addToHead(12);
list.addToHead(11);
list.addToHead(12);

console.log('Initial List:');
list.print();

console.log('Deleted duplicate List:');
const reversedList = removeDuplicate(list);
reversedList.print();