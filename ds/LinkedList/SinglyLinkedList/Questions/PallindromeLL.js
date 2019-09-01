const LinkedList = require('../SinglyLinkedList');

const checkPallin = (list) => {
    let currentNode = list.head;
    let arr = [];
    while (currentNode) {
        arr.push(currentNode.value);
        currentNode = currentNode.next;
    }
    return arr.toString() === arr.reverse().toString();
}

const list = new LinkedList();
list.addToTail('R');
list.addToTail('A');
list.addToTail('D');
list.addToTail('A');
list.addToTail('R');
list.print();

console.log(checkPallin(list));