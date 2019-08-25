/**
 * Microsoft
 *
 * You are given two linked-lists representing two non-negative integers.
 * The digits are stored in reverse order and each of their nodes contain a single digit.
 * Add the two numbers and return it as a linked list.
 * 
 * Example:
    Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
    Output: 7 -> 0 -> 8
    Explanation: 342 + 465 = 807.
 */

function LinkedList() {
    this.head = null;
}

function Node(value, next) {
    this.value = value;
    this.next = next;
}

LinkedList.prototype.add = function (value) {
    const newNode = new Node(value, this.head);
    this.head = newNode;
}

LinkedList.prototype.print = function () {
    let l = [];
    let currentNode = this.head;
    while (currentNode) {
        l.push(currentNode.value);
        currentNode = currentNode.next;
    }
    console.log(l.join(' -> '));
}

const getReverseDigits = (list) => {
    let num = [];
    let currentNode = list.head;
    while (currentNode) {
        num.push(currentNode.value);
        currentNode = currentNode.next;
    }
    return num.reverse().join('');
}

const getCombineLinkedList = (list1, list2) => {
    const num = (+getReverseDigits(list1) + +getReverseDigits(list2)) + '';
    let newList = new LinkedList();
    [...num].forEach(c => newList.add(c))
    return newList;
}

const list1 = new LinkedList();
list1.add(3);
list1.add(4);
list1.add(2);

const list2 = new LinkedList();
list2.add(4);
list2.add(6);
list2.add(5);

list1.print();
list2.print();
const list3 = getCombineLinkedList(list1, list2);
list3.print();