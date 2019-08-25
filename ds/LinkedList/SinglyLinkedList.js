function LinkedList() {
    this.head = null;
    this.tail = null;
}

function Node(value, next) {
    this.value = value;
    this.next = next;
}

LinkedList.prototype.addToHead = function (value) {
    const newNode = new Node(value, this.head);
    if (!this.tail) {
        this.tail = newNode;
    }
    this.head = newNode;
}

LinkedList.prototype.addToTail = function (value) {
    const newNode = new Node(value, null);
    if (!this.head) {
        this.head = newNode;
    }
    if (this.tail) {
        this.tail.next = newNode;
    }
    this.tail = newNode;
}

LinkedList.prototype.addAtIndex = function (value, index) {
    const l = this.length();
    if (index < 0 || index >= l) {
        console.log('Error handling');
        throw new Error('Index out of bounds exception');
    }
    if (index === 0) {
        this.addToHead(value);
    } else if (index === l - 1) {
        this.addToTail(value);
    } else {
        let currentIndex = 0;
        let currentNode = this.head;
        while (currentNode) {
            currentIndex++;
            if (currentIndex === index) {
                const newNode = new Node(value, currentNode.next);
                currentNode.next = newNode;
                return;
            }
            currentNode = currentNode.next;
        }
    }
}

LinkedList.prototype.length = function () {
    let length = 0;
    let currentNode = this.head;
    while (currentNode) {
        length++;
        currentNode = currentNode.next;
    }
    return length;
}

LinkedList.prototype.removeFromHead = function () {
    let currentNode = this.head;
    this.head = currentNode.next;
}

LinkedList.prototype.removeFromTail = function () {
    let currentNode = this.head;
    while (currentNode) {
        if (currentNode.next == this.tail) {
            this.tail = currentNode;
            this.tail.next = null;
            return;
        }
        currentNode = currentNode.next;
    }
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

LinkedList.prototype.remove = function (value) {
    if (this.head.value === value) {
        this.removeFromHead();
    } else if (this.tail.value === value) {
        this.removeFromTail();
    } else {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.next.value === value) {
                const deleteNode = currentNode.next;
                currentNode.next = deleteNode.next;
                return deleteNode;
            }
            currentNode = currentNode.next;
        }
    }
    return null;
}

LinkedList.prototype.search = function (searchValue) {
    var currentNode = this.head;
    while (currentNode) {
        if (currentNode.value === searchValue) {
            return currentNode;
        }
        currentNode = currentNode.next;
    }
    return null;
}

module.exports = LinkedList;