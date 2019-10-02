/**
 * Linkedin
 * 
 * Given a sorted list of numbers, change it into a balanced binary search tree. You can assume there will be no duplicate numbers in the list.
 */

const BST = require('../ds/Tree/BST');

const generateBST = (list) => {
    const list2tree = (list, start, end) => {
        if (start > end) {
            return null;
        }
        let mid = Math.floor((start + end) / 2);
        let node = new BST(list[mid]);
        node.left = list2tree(list, start, mid - 1);
        node.right = list2tree(list, mid + 1, end);
        return node;
    }
    return list2tree(list, 0, list.length - 1);
}

//  4261357
//    4
//   / \
//  2   6
// / \ / \
// 1 3 5 7

const list = [1, 2, 3, 4, 5, 6, 7];
console.log(generateBST(list));