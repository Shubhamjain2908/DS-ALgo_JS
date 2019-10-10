/**
 * Microsoft
 *
 * A unival tree is a tree where all the nodes have the same value. Given a binary tree, return the number of unival subtrees in the tree.

For example, the following tree should return 5:
   0
  / \
 1   0
    / \
   1   0
  / \
 1   1

    The 5 trees are:
    - The three single '1' leaf nodes. (+3)
    - The single '0' leaf node. (+1)
    - The [1, 1, 1] tree at the bottom. (+1)

 */

function Tree(value) {
    this.value = value;
    this.right = this.left = null;
}

const univalTree = (tree) => {
    let count = 0;
    const countUnival = (node) => {
        if (!node) {
            return true;
        }
        let left = countUnival(node.left);
        let right = countUnival(node.right);
        if (left === false || right === false) {
            return false;
        }
        if (node.left && node.left.value !== node.value) {
            return false;
        }
        if (node.right && node.right.value !== node.value) {
            return false;
        }
        count++;
        return true;
    }
    countUnival(tree);
    return count;
}

let tree = new Tree(0);
tree.left = new Tree(1);
tree.right = new Tree(0);
tree.right.left = new Tree(1);
tree.right.right = new Tree(0);
tree.right.left.right = new Tree(1);
tree.right.left.left = new Tree(1);
console.log(univalTree(tree));