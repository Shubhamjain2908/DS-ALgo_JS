/**
 * Apple
 * 
 * You are given the root of a binary tree, along with two nodes, A and B. Find and return the lowest common ancestor of A and B. For this problem, you can assume that each node also has a pointer to its parent, along with its left and right child.
 * 
#   a
#  / \
# b   c
#    / \
#   d*  e*

Output: c
 */

function BinaryTree(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

const lca = (tree, n1, n2) => {

    // This function returns pointer to LCA of two given 
    // values n1 and n2. This function assumes that n1 and 
    // n2 are present in Binary Tree 
    const findLCA = (node, n1, n2) => {
        // Base case 
        if (!node) return null;

        // If either n1 or n2 matches with root's key, report 
        // the presence by returning root (Note that if a key is 
        // ancestor of other, then the ancestor key becomes LCA 
        if (node.value === n1 || node.value === n2)
            return node;

        // Look for keys in left and right subtrees 
        let left_lca = findLCA(node.left, n1, n2);
        let right_lca = findLCA(node.right, n1, n2);

        // If both of the above calls return Non-NULL, then one key 
        // is present in once subtree and other is present in other, 
        // So this node is the LCA 
        if (left_lca !== null && right_lca !== null)
            return node;

        // Otherwise check if left subtree or right subtree is LCA 
        return (left_lca !== null) ? left_lca : right_lca;
    }

    return findLCA(tree, n1.value, n2.value);
}

let tree = new BinaryTree('a');
tree.left = new BinaryTree('b');
tree.right = new BinaryTree('c');
tree.right.left = new BinaryTree('d');
tree.right.right = new BinaryTree('e');
console.log(lca(tree, tree.right.left, tree.right.right));