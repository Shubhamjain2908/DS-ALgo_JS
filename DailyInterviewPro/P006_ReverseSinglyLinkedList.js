/**
 * Google
 * 
 * Given a singly-linked list, reverse the list. 
 * This can be done iteratively or recursively. Can you get both solutions?
 * 
 * Example: 
    Input: 4 -> 3 -> 2 -> 1 -> 0 -> NULL
    Output: 0 -> 1 -> 2 -> 3 -> 4 -> NULL
 */

const LinkedList = require('../ds/LinkedList/SinglyLinkedList');

// Iterative way
const reverseList = (list) => {
   let prev = null;
   let current = list.head;
   let next = null;
   while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
   }
   list.head = prev;
   return list;
}

/**
 * Recursive approach
 * @param {List Head} head
 * @returns {New Head} newHead 
 */
const recursive = (head) => {
   if (!head || !head.next) {
      return head;
   }
   let newHead = recursive(head.next);
   head.next.next = head;
   head.next = null;
   return newHead;
}

/**
 * Recursive approach
 * @param {Current Node} curr 
 * @param {Prev node} prev
 * @returns {List head} newHead 
 */
const reverseUtil = (curr, prev) => {

   /* If last node mark it head*/
   if (curr.next == null) {
      head = curr;

      /* Update next to prev node */
      curr.next = prev;

      return head;
   }

   /* Save curr->next node for recursive call */
   let next1 = curr.next;

   /* and update next ..*/
   curr.next = prev;

   reverseUtil(next1, curr);
   return head;
}

const list = new LinkedList();
list.addToHead(0);
list.addToHead(1);
list.addToHead(2);
list.addToHead(3);
list.addToHead(4);

console.log('Original List:');
list.print();

const recHead = recursive(list.head);
list.head = recHead;
console.log('Reversed List:');
list.print();

// const reversedList = reverseList(list);
// console.log('Reversed List:');
// reversedList.print();

// const rl = reverseUtil(list.head, null);
// console.log(rl);