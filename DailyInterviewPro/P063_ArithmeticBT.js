/**
 * Apple
 *
 * You are given a binary tree representation of an arithmetic expression. In this tree, each leaf is an integer value,, and a non-leaf node is one of the four operations: '+', '-', '*', or '/'.

    Write a function that takes this tree and evaluates the expression.

Example:
    *
   / \
  +    +
 / \  / \
3  2  4  5

    This is a representation of the expression (3 + 2) * (4 + 5), and should return 45.
 */

function Tree(value) {
    this.value = value;
    this.left = this.right = null;
}

const evaluatesTree = tree => {
    return isNaN(tree.value) ? eval(evaluatesTree(tree.left) + tree.value + evaluatesTree(tree.right)) : tree.value;
}

const tree = new Tree('*');
tree.left = new Tree('+');
tree.right = new Tree('+');
tree.left.left = new Tree('3');
tree.left.right = new Tree('2');
tree.right.left = new Tree('4');
tree.right.right = new Tree('5');
console.log(evaluatesTree(tree));

const tree2 = new Tree('+');
tree2.left = new Tree('3');
tree2.right = new Tree('*');
tree2.right.left = new Tree('+');
tree2.right.left.left = new Tree('5');
tree2.right.left.right = new Tree('9');
tree2.right.right = new Tree('2');
console.log(evaluatesTree(tree2));