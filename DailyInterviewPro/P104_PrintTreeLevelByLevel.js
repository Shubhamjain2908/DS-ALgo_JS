/**
 * Apple
 * 
 * You are given a tree, and your job is to print it level-by-level with linebreaks.
    a
   / \
  b   c
 / \ / \
d  e f  g

The output should be
a
bc
defg
 */

function Tree(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

const printLevelTraversal = tree => {
    let levelMap = new Map();
    const levelTraversal = (node, level = 0) => {
        let arr = [];
        if (levelMap.has(level)) {
            arr = levelMap.get(level);
        }
        arr.push(node.value);
        levelMap.set(level, arr);
        if (node.left) {
            levelTraversal(node.left, level + 1);
        }
        if (node.right) {
            levelTraversal(node.right, level + 1);
        }
    }
    levelTraversal(tree);
    levelMap.forEach(v => console.log(v.join('')));
}

let tree = new Tree('a');
tree.left = new Tree('b');
tree.right = new Tree('c');
tree.left.left = new Tree('d');
tree.left.right = new Tree('e');
tree.right.left = new Tree('f');
tree.right.right = new Tree('g');

printLevelTraversal(tree);