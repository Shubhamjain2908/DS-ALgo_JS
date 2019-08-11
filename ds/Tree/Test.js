const BST = require('./BST');

var bst = new BST(50);

bst.insert(30);
bst.insert(70);
bst.insert(100);
bst.insert(60);
bst.insert(59);
bst.insert(20);
bst.insert(45);
bst.insert(35);
bst.insert(85);
bst.insert(105);
bst.insert(10);

console.log(bst);

console.log(bst.contains(393));
console.log(bst.contains(30));

const log = function (value) {
    console.log(value);
}

console.log('+++++++++++++++++++DFS++++++++++++++++++++++');

console.log('================ InOrder ============');
bst.depthFirstTraversal(log, 'in-order');

console.log('================ PreOrder ============');
bst.depthFirstTraversal(log, 'pre-order');

console.log('================ PostOrder ============');
bst.depthFirstTraversal(log, 'post-order');

console.log('+++++++++++++++++++BFS++++++++++++++++++++++');
bst.breadthFirstTraversal(log);