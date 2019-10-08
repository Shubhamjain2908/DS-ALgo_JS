/**
 * Amazon
 * 
 * Given a binary tree, return all values given a certain height h.
 * Ex: 
 * Tree =>
     1
    / \
   2   3
  / \   \
 4   5   7
 Height: 3
 Output = [4, 5, 7];
 */

function BinaryTree(value) {
    this.value = value;
    this.right = this.left = null;
}

const getValues = (tree, height) => {
    let levelMap = new Map();
    const inOrder = (tree, level) => {
        if (tree.left) {
            inOrder(tree.left, level + 1);
        }
        let arr = [];
        if (levelMap.get(level)) {
            arr.push(...levelMap.get(level));
        }
        arr.push(tree.value);
        levelMap.set(level, arr);
        if (tree.right) {
            inOrder(tree.right, level + 1);
        }
    }
    inOrder(tree, 1);
    return levelMap.get(height);
}

let tree = new BinaryTree(1);
tree.left = new BinaryTree(2);
tree.right = new BinaryTree(3);
tree.left.left = new BinaryTree(4);
tree.left.right = new BinaryTree(5);
tree.right.right = new BinaryTree(7);
const height = 3;
console.log(getValues(tree, height));