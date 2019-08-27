const LinkedList = require('../SinglyLinkedList');

const removeDuplicate = (list) => {
    let currentNode = list.head;
    while (currentNode) {
        let temp = currentNode;
        while (temp && temp.value === currentNode.value) {
            temp = temp.next;
        }
        currentNode.next = temp;
        currentNode = currentNode.next;
    }
    return list;
}

//  11->11->11->21->43->43->60
const list = new LinkedList();
list.addToHead(60);
list.addToHead(43);
list.addToHead(43);
list.addToHead(21);
list.addToHead(11);
list.addToHead(11);
list.addToHead(11);

console.log('Initial List:');
list.print();

console.log('Deleted duplicate List:');
const reversedList = removeDuplicate(list);
reversedList.print();