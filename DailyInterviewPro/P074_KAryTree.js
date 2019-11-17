/**
 * Microsoft
 * 
 * A k-ary tree is a tree with k-children, and a tree is symmetrical if the data of the left side of the tree is the same as the right side of the tree. 

Here's an example of a symmetrical k-ary tree.
        4
     /     \
    3        3
  / | \    / | \
9   4  1  1  4  9
Given a k-ary tree, figure out if the tree is symmetrical.
 */

function Node(value, children = []) {
    this.value = value;
    this.children = children;
}

const isSymmetry = tree => {
    let node = Object.assign({}, tree);
    mirrorTree(node);
    return JSON.parse(JSON.stringify(node)) === JSON.parse(JSON.stringify(tree));
}

// Function to convert a tree to its mirror 
const mirrorTree = (root) => {

    // Base Case : nothing to do if root is None 
    if (!root) return;

    // Number of children of root  
    const n = root.children.length;

    // If number of child is less than 2 i.e.  
    // 0 or 1 we don't need to do anything 
    if (n < 2) return;

    // Calling mirror function for each child 
    for (let i = 0; i < n; i++) {
        mirrorTree(root.children[i]);
    }

    // Reverse variable sized array of child pointers 
    root.children.reverse()
}

// Prints the n-ary tree level wise 
const printNodeLevelWise = (root) => {
    if (!root) return;

    // create a queue and enqueue root to it 
    let queue = [];
    queue.push(root)

    // Do level order traversal. Two loops are used 
    // to make sure that different levels are printed 
    // in different lines 
    while (queue.length) {
        let n = queue.length;
        let str = '';
        while (n > 0) {
            // Dequeue an item from queue and print it 
            let p = queue.shift();
            str += (p.value) + '';

            // Enqueue all children of the dequeued item 
            for (let index = 0; index < p.children.length; index++) {
                const element = p.children[index];
                queue.push(element.value);
            }
            n -= 1;
        }
        console.log(str);
    }
}

let tree = new Node(4);
tree.children = [new Node(3), new Node(3)];
tree.children[0].children = [new Node(9), new Node(4), new Node(1)];
tree.children[1].children = [new Node(1), new Node(4), new Node(9)];
console.log(isSymmetry(tree));
// printNodeLevelWise(tree);