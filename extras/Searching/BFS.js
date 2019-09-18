const BinarySearchTree = require('../../ds/Tree/BST2');

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

console.log(tree);

const breadthFirstSearchIter = (tree) => {
    let currentNode = tree.root;
    let queue = [currentNode];
    let list = [];
    while (queue.length > 0) {
        currentNode = queue.shift();
        list.push(currentNode.value);
        if (currentNode.left) {
            queue.push(currentNode.left);
        }
        if (currentNode.right) {
            queue.push(currentNode.right);
        }
    }
    return list;
}

const breadthFirstSearchRec = (queue, list = []) => {
    if (!queue.length) {
        return list;
    }
    let currentNode = queue.shift();
    list.push(currentNode.value);
    if (currentNode.left) {
        queue.push(currentNode.left);
    }
    if (currentNode.right) {
        queue.push(currentNode.right);
    }
    return breadthFirstSearchRec(queue, list);
}

console.log(breadthFirstSearchIter(tree));
console.log(breadthFirstSearchRec([tree.root]));