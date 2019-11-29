/**
 * Facebook
 * 
 * You are given the root of a binary tree. Find the path between 2 nodes that maximizes the sum of all the nodes in the path, and return the sum. The path does not necessarily need to go through the root.
 * 

// (* denotes the max path)
//       *10
//       /  \
//     *2   *10
//     / \     \
//   *20  1    -25
//             /  \
//            3    4
Output => 42
 */

function BinaryTree(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

const findMaxSum = (tree) => {
    let res = Number.MIN_VALUE;
    const findMaxUtil = root => {
        if (!root) {
            return 0;
        }
        // l and r store maximum path sum going through left  
        // and right child of root respetively 
        let left = findMaxUtil(root.left);
        let right = findMaxUtil(root.right);
        // Max path for parent call of root. This path  
        // must include at most one child of root 
        let max_single = Math.max(Math.max(left, right) + root.value, root.value);

        // Max top represents the sum when the node under 
        // consideration is the root of the maxSum path and 
        // no ancestor of root are there in max sum path 
        let max_top = Math.max(max_single, left + right + root.value);

        // Static variable to store the changes 
        // Store the maximum result 
        res = Math.max(res, max_top);
        return max_single;
    }
    findMaxUtil(tree);
    return res;
}

let tree = new BinaryTree(10);
tree.left = new BinaryTree(2);
tree.right = new BinaryTree(10);
tree.left.left = new BinaryTree(20);
tree.left.right = new BinaryTree(1);
tree.right.right = new BinaryTree(-25);
tree.right.right.left = new BinaryTree(3);
tree.right.right.right = new BinaryTree(4);
console.log(findMaxSum(tree));