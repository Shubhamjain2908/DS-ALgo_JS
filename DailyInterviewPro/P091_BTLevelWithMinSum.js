/**
 * Twitter
 * 
 * You are given the root of a binary tree. Find the level for the binary tree with the minimum sum, and return that value.
#     10
#    /  \
#   2    8
#  / \    \
# 4   1    2
For instance, in the give example, the sums of the trees are 10, 2 + 8 = 10, and 4 + 1 + 2 = 7. So, the answer here should be 7.
 */

function BinaryTree(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

const minSum = root => {
    // Base case 
    if (!root) return 0;

    // Initialize result 
    let result = root.value;

    // Do Level order traversal keeping track of number of nodes at every level. 
    let q = [];
    q.push(root);
    while (q.length) {
        // Get the size of queue when the level order traversal for one level finishes 
        let count = q.length;

        // Iterate for all the nodes in the queue currently 
        let sum = 0;
        while (count--) {
            // Dequeue an node from queue 
            let temp = q.shift();

            // Add this node's value to current sum. 
            sum += temp.value;

            // Enqueue left and right children of dequeued node
            if (temp.left)
                q.push(temp.left);
            if (temp.right)
                q.push(temp.right);
        }
        // Update the maximum node count value 
        result = Math.min(sum, result);
    }

    return result;
}

let tree = new BinaryTree(10);
tree.left = new BinaryTree(2);
tree.right = new BinaryTree(8);
tree.left.left = new BinaryTree(4);
tree.left.right = new BinaryTree(1);
tree.right.right = new BinaryTree(2);
console.log(minSum(tree));