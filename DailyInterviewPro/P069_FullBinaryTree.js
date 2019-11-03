/**
 * Google
 * 
 * Given a binary tree, remove the nodes in which there is only 1 child, so that the binary tree is a full binary tree.
    So leaf nodes with no children should be kept, and nodes with 2 children should be kept as well.
    Example: Given this tree:
        #     1
        #    / \ 
        #   2   3
        #  /   / \
        # 0   9   4

        # We want a tree like:
        #     1
        #    / \ 
        #   0   3
        #      / \
        #     9   4
 */

function BinaryTree(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

const convertFullBinaryTree = tree => {
    const hasOneChild = node => {
        if (!node) {
            return false;
        }
        let left = node.left;
        let right = node.right;
        return (!left && right) || (left && !right);
    }
    const inOrder = tree => {
        if (tree.left) {
            inOrder(tree.left);
        }
        if (hasOneChild(tree.left)) {
            let leftChild = tree.left.left;
            let rightChild = tree.left.right;
            if (leftChild) {
                tree.left = tree.left.left;
            } else if (rightChild) {
                tree.left = tree.left.right;
            }
        } else if (hasOneChild(tree.right)) {
            let leftChild = tree.right.left;
            let rightChild = tree.right.right;
            if (leftChild) {
                tree.right = tree.right.left;
            } else if (rightChild) {
                tree.right = tree.right.right;
            }
        }
        if (tree.right) {
            inOrder(tree.right);
        }
    }
    inOrder(tree);
    return tree;
}

const removeHalfNodes = node => {
    if (!node) {
        return null;
    }

    node.left = removeHalfNodes(node.left);
    node.right = removeHalfNodes(node.right);

    if (!node.left && !node.right) {
        return node;
    }

    // if current nodes is a half node with left child NULL left, then it's right child is returned and replaces it in the given tree 
    if (!node.left) {
        return node.right;
    }

    // if current nodes is a half node with right, then it's right child is returned and replaces it in the given tree
    if (!node.right) {
        return node.left;
    }

    return node;
}

let tree = new BinaryTree(1);
tree.left = new BinaryTree(2);
tree.right = new BinaryTree(3);
tree.left.left = new BinaryTree(0);
tree.right.left = new BinaryTree(9);
tree.right.right = new BinaryTree(4);
console.log(removeHalfNodes(tree));

const tree2 = new BinaryTree(2);
tree2.left = new BinaryTree(7);
tree2.right = new BinaryTree(5);
tree2.left.right = new BinaryTree(6);
tree2.left.right.left = new BinaryTree(1);
tree2.left.right.right = new BinaryTree(11);
tree2.right.right = new BinaryTree(9);
tree2.right.right.left = new BinaryTree(4);
console.log(removeHalfNodes(tree2));