/**
 * Google
 *
 * Given the root to a binary tree, implement serialize(root), which serializes the tree into a string, and deserialize(s), which deserializes the string back into the tree.

    For example, given the following Node class

    class Node:
        def __init__(self, val, left=None, right=None):
            self.val = val
            self.left = left
            self.right = right
    The following test should pass:

node = Node('root', Node('left', Node('left.left')), Node('right'))
assert deserialize(serialize(node)).left.left.val == 'left.left'
 */

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const serialize = (root) => {
    const result = [];
    const helper = node => {
        if (!node) {
            result.push(-1);
            return;
        }
        result.push(node.value);
        helper(node.left);
        helper(node.right);
    }
    helper(root);
    return result;
}

const deserialize = (array) => {
    let result, i = 0;
    const helper = () => {
        if (!array[i] || array[i] === -1) {
            return;
        }
        const node = new Node(array[i]);
        i++;
        node.left = helper();
        node.right = helper();
        return node;
    }
    return helper(result);
}

const tree = new Node(12);
tree.left = new Node(13);
const serializeArray = serialize(tree);
console.log('Serialize => ', serializeArray);
console.log('Deserialize => ', deserialize(serializeArray));