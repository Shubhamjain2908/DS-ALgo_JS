/**
 * Google
 *
 * You are given the root of a binary tree. Return the deepest node (the furthest node from the root).

    Example:
         a
        / \
       b   c
      /
     d

    The deepest node in this tree is d at depth 3.
 */

function BST(value) {
    this.value = value;
    this.right = null;
    this.left = null;
}

const deepestNodeBFS = (tree) => {
    let queue = [tree];
    let temp = null;
    while (queue.length) {
        temp = queue.shift();
        if (temp.left) {
            queue.push(temp.left);
        }
        if (temp.right) {
            queue.push(temp.right);
        }
    }
    return temp;
}

const deepestNodeLevelOrder = (tree) => {
    let queue = [tree];
    let temp = null;
    let levelMap = new Map();
    let level = 0;
    levelMap.set(level, [...queue]);
    while (queue.length) {
        temp = queue.shift();
        if (temp.left) {
            queue.push(temp.left);
        }
        if (temp.right) {
            queue.push(temp.right);
        }
        if (queue.length) {
            level++;
            levelMap.set(level, [...queue]);
        }
    }
    return levelMap.get(level);
}

const tree = new BST('a');
tree.left = new BST('b');
tree.right = new BST('c');
tree.left.left = new BST('d');
console.log(deepestNodeBFS(tree));
console.log(deepestNodeLevelOrder(tree));