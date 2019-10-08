/**
 * Facebook
 * 
 * You are given the root of a binary search tree. Return true if it is a valid binary search tree, and false otherwise. 
 * Recall that a binary search tree has the property that all values in the left subtree are less than or equal to the root, and all values in the right subtree are greater than or equal to the root.
 */

function BST(value) {
    this.value = value;
    this.left = this.right = null;
}

const isValid = tree => {
    let temp;
    let result = true;
    const inOrder = tree => {
        if (tree.left) {
            inOrder(tree.left);
        }
        if (temp && temp > tree.value) {
            result = false;
            return;
        } else {
            temp = tree.value;
        }
        if (tree.right) {
            inOrder(tree.right);
        }
    }
    inOrder(tree);
    return result;
}

const tree = new BST(5);
tree.left = new BST(3);
tree.right = new BST(7);
tree.left.left = new BST(1);
tree.left.right = new BST(4);
tree.right.left = new BST(6);
console.log(isValid(tree));

const tree2 = new BST(3);
tree2.left = new BST(2);
tree2.right = new BST(5);
tree2.left.left = new BST(1);
tree2.left.right = new BST(4);
console.log(isValid(tree2)); 