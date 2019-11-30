/**
 * Microsoft
 * 
 * Given the root of a binary tree, print its level-order traversal. For example:
  1
 / \
2   3
   / \
  4   5

The following tree should output 1, 2, 3, 4, 5.
 */

function BinaryTree(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

const levelOrderTraversal = tree => {
    let result = [];
    let q = [tree];
    while (q.length) {
        let temp = q.shift();
        result.push(temp.value);
        if (temp.left) {
            q.push(temp.left);
        }
        if (temp.right) {
            q.push(temp.right);
        }
    }
    console.log(result);
}

let tree = new BinaryTree(1);
tree.left = new BinaryTree(2);
tree.right = new BinaryTree(3);
tree.right.left = new BinaryTree(4);
tree.right.right = new BinaryTree(5);
levelOrderTraversal(tree);