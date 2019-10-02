/**
 * Twitter
 *
 * You are given an array of k sorted singly linked lists. Merge the linked lists into a single sorted linked list and return it.
 */

const LinkedList = require('../ds/LinkedList/SinglyLinkedList/SinglyLinkedList');

const mergeKLL = (lists, k) => {
    let arr = [];
    for (let i = 0; i < k; i++) {
        const list = lists[i];
        let currentNode = list.head;
        while (currentNode) {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }
    }
    arr.sort((a, b) => a - b);
    let mergedList = new LinkedList();
    for (let i = 0; i < arr.length; i++) {
        mergedList.addToTail(arr[i]);
    }
    return mergedList;
}

const mergeKLL_2 = (lists, k) => {
    let result = lists[0];
    for (let i = 1; i < k; i++) {
        result = merge2LL(result, lists[i]);
    }
    return result;
}

const merge2LL = (list1, list2) => {
    if (!list1) {
        return list2;
    } else if (!list2) {
        return list1;
    }
    let result = new LinkedList();
    let currentNode1 = list1.head;
    let currentNode2 = list2.head;
    let temp = null;
    while (currentNode1 && currentNode2) {
        if (currentNode1.value <= currentNode2.value) {
            temp = currentNode1.value;
            currentNode1 = currentNode1.next;
        } else {
            temp = currentNode2.value;
            currentNode2 = currentNode2.next;
        }
        result.addToTail(temp);
    }
    result.tail.next = currentNode1 || currentNode2;
    return result;
}


const k = 3;
// list1 = 1->3->5->7->NULL
const list1 = new LinkedList();
list1.addToTail(1);
list1.addToTail(3);
list1.addToTail(5);
list1.addToTail(7);
// list1.print();

// list2 = 2->4->6->8->NULL
const list2 = new LinkedList();
list2.addToTail(2);
list2.addToTail(4);
list2.addToTail(6);
list2.addToTail(8);
// list2.print();

// list3 = 0->9->10->11
const list3 = new LinkedList();
list3.addToTail(0);
list3.addToTail(9);
list3.addToTail(10);
list3.addToTail(11);
// list3.print();

const lists = [list1, list2, list3];
mergeKLL(lists, k).print();  // 0->1->2->3->4->5->6->7->8->9->10->11 

mergeKLL_2(lists, k).print();   // 0->1->2->3->4->5->6->7->8->9->10->11 
