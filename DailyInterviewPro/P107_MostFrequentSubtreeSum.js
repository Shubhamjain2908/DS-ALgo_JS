/**
 * LinkedIn
 *
 * Given a binary tree, find the most frequent subtree sum.

Example:
   3
  / \
 1   -3

The above tree has 3 subtrees. The root node with 3, and the 2 leaf nodes, which gives us a total of 3 subtree sums. The root node has a sum of 1 (3 + 1 + -3), the left leaf node has a sum of 1, and the right leaf node has a sum of -3. Therefore the most frequent subtree sum is 1.

If there is a tie between the most frequent sum, you can return any one of them.
 */

function Node(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
}

const mostFreqSubtreeSum = root => {
    const dfs = (root, counts, max) => {
        if (!root) return 0;
        let sum = root.value + dfs(root.left, counts, max) + dfs(root.right, counts, max);
        counts[sum] = (counts[sum] || 0) + 1;
        max.value = Math.max(max.value, counts[sum]);
        return sum;
    }
    const counts = {};
    const max = { value: -Infinity };
    dfs(root, counts, max);
    const sums = [];
    for (let key in counts) {
        if (counts[key] === max.value) sums.push(parseInt(key));
    }
    return sums;
}

let tree = new Node(3, new Node(1), new Node(-3));
console.log(mostFreqSubtreeSum(tree));