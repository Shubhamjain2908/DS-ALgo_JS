/**
 * Microsoft
 * 
 * You are given the preorder and inorder traversals of a binary tree in the form of arrays. Write a function that reconstructs the tree represented by these traversals.

Example:
Preorder: [a, b, d, e, c, f, g]
Inorder: [d, b, e, a, f, c, g]

The tree that should be constructed from these traversals is:
    a
   / \
  b   c
 / \ / \
d  e f  g
 */

function BinaryTree(value) {
    this.value = value;
    this.right = this.left = null;
}

/* UTILITY FUNCTIONS */
/* Function to find index of value in arr[start...end] 
     The function assumes that value is present in in[] */
const search = (arr, strt, end, value) => {
    let i;
    for (i = strt; i <= end; i++) {
        if (arr[i] == value)
            return i;
    }
    return i;
}

const constructTree = (inorder, preorder) => {
    let preIndex = 0;
    /* Recursive function to construct binary of size len from 
       Inorder traversal in[] and Preorder traversal pre[]. 
       Initial values of inStrt and inEnd should be 0 and len -1.   
       The function doesn't do any error checking for cases where  
       inorder and preorder do not form a tree */
    const buildTree = (inorder, preorder, inStrt, inEnd) => {
        if (inStrt > inEnd)
            return null;

        /* Pick current node from Preorder traversal using preIndex 
           and increment preIndex */
        let tNode = new BinaryTree(preorder[preIndex++]);

        /* If this node has no children then return */
        if (inStrt == inEnd)
            return tNode;

        /* Else find the index of this node in Inorder traversal */
        let inIndex = search(inorder, inStrt, inEnd, tNode.value);

        /* Using index in Inorder traversal, construct left and 
           right subtress */
        tNode.left = buildTree(inorder, preorder, inStrt, inIndex - 1);
        tNode.right = buildTree(inorder, preorder, inIndex + 1, inEnd);

        return tNode;
    }
    return buildTree(inorder, preorder, 0, inorder.length - 1)
}

const preorder = ['a', 'b', 'd', 'e', 'c', 'f', 'g'];
const inorder = ['d', 'b', 'e', 'a', 'f', 'c', 'g'];

console.log(constructTree(inorder, preorder));