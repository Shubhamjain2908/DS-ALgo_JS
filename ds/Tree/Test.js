const BST = require('./BST');

var bst = new BST(50);

bst.insert(30);
bst.insert(10);
bst.insert(40);
bst.insert(100);
bst.insert(60);
bst.insert(70);
bst.insert(80);
bst.insert(90);

console.log(bst);

console.log(bst.contains(393));
console.log(bst.contains(30));

const log = function (value) {
    console.log(value);
}

bst.depthFirstTraversal(log);