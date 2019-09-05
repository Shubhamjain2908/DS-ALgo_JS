/**
 * Twitter
 *
 * You are given the root of a binary tree. Invert the binary tree in place.
 *  That is, all left children should become right children, and all right children should become left children.
 *
 * Example:
    a
   / \
  b   c
 / \  /
d   e f
The inverted version of this tree is as follows:
  a
 / \
 c  b
 \  / \
  f e  d
 */

const BST = require('../ds/Tree/BST');

const invertTree = (tree) => {
    if (!tree) return null;
    let right = invertTree(tree.right);
    let left = invertTree(tree.left);
    tree.left = right;
    tree.right = left;
    return tree;
}

let tree = new BST('a');
tree.left = new BST('b');
tree.right = new BST('c');
tree.left.left = new BST('d');
tree.left.right = new BST('e');
tree.right.left = new BST('f');
console.log(invertTree(tree));