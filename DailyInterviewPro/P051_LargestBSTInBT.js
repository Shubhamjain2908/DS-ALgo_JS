/**
 * Twitter
 *
 * You are given the root of a binary tree. Find and return the largest subtree of that tree, which is a valid binary search tree.
 *
 * Example:
    Input:
         5
        / \
       6   7
      /   / \
     2   4   9
    Output:
        7
       / \
      4   9
 */

function BinaryTree(value) {
    this.value = value;
    this.left = this.right = null;
}

BinaryTree.prototype.length = function () {
    let len = 0;
    const inOrder = (node) => {
        if (node.left) {
            inOrder(node.left);
        }
        len++;
        if (node.right) {
            inOrder(node.right);
        }
    }
    inOrder(this);
    return len;
}

const isBST = (node, prev = null) => {
    if (!node) {
        return true;
    }
    if (!isBST(node.left, prev)) {
        return false;
    }
    if (prev && prev >= node.value) {
        return false;
    } else {
        prev = node.value;
    }
    return isBST(node.right, prev);
}

/**
 * Top to Down Approach. The worst case time complexity of this method will be O(n^2). Consider a skewed tree for worst case analysis.
 * @param {BinaryTree} node 
 * @returns {BinaryTree} largestBST
 */
const largestBST = (node) => {
    if (!node) {
        return null;
    }
    if (isBST(node)) {
        return node;
    }
    let left = largestBST(node.left);
    let right = largestBST(node.right);
    return left.length() > right.length() ? left : right;
}

/**
 * Down-Up Approach. The worst case time complexity of this method will be O(n).
 * @param {BinaryTree} node 
 * @returns {BinaryTree} largestBST
 */
const largestBST2 = (tree) => {
    function Info(size, max, min, ans, isBST, tree) {
        this.size = size;
        this.max = max;
        this.min = min;
        this.ans = ans;
        this.isBST = isBST;
        this.tree = tree;
    }
    const largestBST_helper = (node) => {
        if (!node) {
            return new Info(0, Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, 0, true, null);
        }
        if (!node.left && !node.right) {
            return new Info(1, node.value, node.value, 1, true, node);
        }
        let leftInfo = largestBST_helper(node.left);
        let rightInfo = largestBST_helper(node.right);
        let result = new Info();
        result.size = 1 + leftInfo.size + rightInfo.size;
        if (leftInfo.isBST && rightInfo.isBST && leftInfo.max < node.value && rightInfo.min > node.value) {
            result.min = Math.min(leftInfo.min, Math.min(rightInfo.min, node.value));
            result.max = Math.max(rightInfo.max, Math.max(leftInfo.max, node.value));
            result.ans = result.size;
            result.isBST = true;
            result.tree = node;
            return result
        }
        result.tree = leftInfo.ans > rightInfo.ans ? leftInfo.tree : rightInfo.tree;
        result.ans = Math.max(leftInfo.ans, rightInfo.ans);
        result.isBST = false;
        return result;
    }
    return largestBST_helper(tree).tree;
}

let tree = new BinaryTree(5);
tree.left = new BinaryTree(6);
tree.right = new BinaryTree(7);
tree.right.left = new BinaryTree(4);
tree.right.right = new BinaryTree(9);
tree.left.left = new BinaryTree(2);
console.log(largestBST(tree));