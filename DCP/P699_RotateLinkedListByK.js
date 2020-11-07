/**
 * AirBNB
 * 
 * Given a linked list and a positive integer k, rotate the list to the right by k places.
    For example, given the linked list 7 -> 7 -> 3 -> 5 and k = 2, it should become 3 -> 5 -> 7 -> 7.
    Given the linked list 1 -> 2 -> 3 -> 4 -> 5 and k = 3, it should become 3 -> 4 -> 5 -> 1 -> 2.
 */

function Node(data) {
    this.data = data;
    this.next = null;
}

// This function rotates a linked list counter-clockwise and updates the head. The function assumes that k is 
// smaller than size of linked list. It doesn't modify the list if k is greater than or equal to size 
const rotate = (head, k) => {
    if (k == 0)
        return;

    // Let us understand the below code for example k = 4 and list = 10->20->30->40->50->60. 
    let current = head;

    // current will either point to kth or NULL after this loop. current will point to node 40 in the above example 
    let count = 1;
    while (count < k && current != null) {
        current = current.next;
        count++;
    }

    // If current is NULL, k is greater than or equal to count of nodes in linked list. Don't change the list in this case 
    if (current == null)
        return;

    // current points to kth node. Store it in a variable. kthNode points to node 40 in the above example 
    let kthNode = current;

    // current will point to last node after this loop current will point to node 60 in the above example 
    while (current.next != null)
        current = current.next;

    // Change next of last node to previous head Next of 60 is now changed to node 10 
    current.next = head;

    // Change head to (k+1)th node head is now changed to node 50 
    head = kthNode.next;

    // change next of kth node to null 
    kthNode.next = null;
    return current;
}

const list = new Node(7);
list.next = new Node(7);
list.next.next = new Node(3);
list.next.next.next = new Node(5);
const k = 2;
console.log('List 1 => ', rotate(list, k));

const list2 = new Node(1);
list2.next = new Node(2);
list2.next.next = new Node(3);
list2.next.next.next = new Node(4);
list2.next.next.next.next = new Node(5);
const k2 = 2;
console.log('List 2 => ', rotate(list2, k2));