/**
 * Apple
 * 
 * Given an integer k and a binary search tree, find the floor (less than or equal to) of k, and the ceiling (larger than or equal to) of k. 
 * If either does not exist, then print them as None.
 */

const BST = require('../ds/Tree/BST').default;

const floorCiel = async (tree, k) => {
    await inOrder(tree);
    let floor = ciel = k;
    for (let i = 0; i < arr.length - 1; i++) {
        const e = arr[i];
        const e2 = arr[i + 1];
        if (e === k) {
            floor = ciel = k;
            break;
        } else if (e2 === k) {
            floor = ciel = k;
            break;
        } else if (e <= k && e2 >= k) {
            floor = e;
            ciel = e2;
            break;
        }
    }
    return [floor, ciel];
}
let arr = [];
const inOrder = (tree) => {
    if (tree.left) {
        inOrder(tree.left);
    }
    arr.push(tree.value);
    if (tree.right) {
        inOrder(tree.right);
    }
}

let tree = new BST(8);
tree.insert(4);
tree.insert(12);
tree.insert(2);
tree.insert(6);
tree.insert(10);
tree.insert(14);

floorCiel(tree, 5).then(r => console.log(r)).catch(err => console.err('error', e));
