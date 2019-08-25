function LinkedList() {
    this.head = null;
}

function Node(value, next) {
    this.value = value;
    this.next = next;
}

LinkedList.prototype.add = function (value) {
    let newNode = new Node(value, this.head);
    if (!this.head) {
        this.head = newNode;
    }
    newNode.next = this.head;
}

let list = new LinkedList();
list.add(1);
list.add(2);
console.log(list.head, list.head.next, list.head.next.next);