const BinarySearchTree = require('../../ds/Tree/BST2');

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

// console.log(tree);

const traverseInOrder = (node, list) => {
    if (node.left) {
        traverseInOrder(node.left, list);
    }
    list.push(node.value);
    if (node.right) {
        traverseInOrder(node.right, list);
    }
    return list;
}

const traversePostOrder = (node, list) => {
    if (node.left) {
        traversePostOrder(node.left, list);
    }
    if (node.right) {
        traversePostOrder(node.right, list);
    }
    list.push(node.value);
    return list;
}

const traversePreOrder = (node, list) => {
    list.push(node.value);
    if (node.left) {
        traversePreOrder(node.left, list);
    }
    if (node.right) {
        traversePreOrder(node.right, list);
    }
    return list;
}


const DFSInorder = tree => traverseInOrder(tree.root, []);

const DFSPostorder = tree => traversePostOrder(tree.root, []);

const DFSPreorder = tree => traversePreOrder(tree.root, []);


console.log('DFS Inorder => ', DFSInorder(tree));
console.log('DFS Postorder => ', DFSPostorder(tree));
console.log('DFS Preorder => ', DFSPreorder(tree));