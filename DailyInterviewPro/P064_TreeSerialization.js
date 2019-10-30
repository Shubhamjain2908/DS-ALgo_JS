/**
 * Apple
 * 
 * You are given the root of a binary tree. You need to implement 2 functions:

1. serialize(root) which serializes the tree into a string representation
2. deserialize(s) which deserializes the string back to the original tree that it represents

For this problem, often you will be asked to design your own serialization format. However, for simplicity, let's use the pre-order traversal of the tree. 

#     1
#    / \
#   3   4
#  / \   \
# 2   5   7

serialize(tree) => 1 3 2 # # 5 # # 4 # 7 # #
deserialize('1 3 2 # # 5 # # 4 # 7 # #') => 132547

 */

function Tree(value) {
    this.value = value;
    this.left = this.right = null;
}

const MARKER = '#';

const serialize = (tree) => {
    let str = [];
    const serialize_hepler = tree => {
        if (!tree) {
            str.push(MARKER);
            return;
        }
        str.push(tree.value);
        serialize_hepler(tree.left);
        serialize_hepler(tree.right);
    }
    serialize_hepler(tree);
    return str.join(' ');
}

const deserialize = (str) => {
    let data = str.split(' ');
    const deserialize_helper = () => {
        let val = data.shift();
        if (!val || val === MARKER) {
            return null;
        }
        let root = new Tree(val);
        root.left = deserialize_helper();
        root.right = deserialize_helper();
        return root;
    }
    return deserialize_helper();
}

const tree = new Tree('1');
tree.left = new Tree('3');
tree.right = new Tree('4');
tree.left.left = new Tree('2');
tree.left.right = new Tree('5');
tree.right.right = new Tree('7');
const str = serialize(tree);
console.log('Serialize => ', str);
const newTree = deserialize(str);
console.log('Deserialize => ', newTree);