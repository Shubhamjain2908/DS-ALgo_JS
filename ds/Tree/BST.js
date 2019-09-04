function BST(value) {
    this.value = value;
    this.right = null;
    this.left = null;
}

BST.prototype.insert = function (value) {
    if (value <= this.value) {
        if (!this.left) {
            this.left = new BST(value);
        } else {
            this.left.insert(value);
        }
    } else if (value > this.value) {
        if (!this.right) {
            this.right = new BST(value);
        } else {
            this.right.insert(value);
        }
    }
}

BST.prototype.contains = function (value) {
    if (value === this.value) {
        return true;
    } else if (value < this.value) {
        if (!this.left) {
            return false;
        } else {
            return this.left.contains(value);
        }
    } else if (value > this.value) {
        if (!this.right) {
            return false;
        } else {
            return this.right.contains(value);
        }
    }
}


BST.prototype.depthFirstTraversal = function (iteratorFunc, order) {
    if (order === 'pre-order') {
        iteratorFunc(this.value);
    }
    if (this.left) {
        this.left.depthFirstTraversal(iteratorFunc, order);
    }
    if (order === 'in-order') {
        iteratorFunc(this.value);
    }
    if (this.right) {
        this.right.depthFirstTraversal(iteratorFunc, order);
    }
    if (order === 'post-order') {
        iteratorFunc(this.value);
    }
}

BST.prototype.breadthFirstTraversal = function (iteratorFunc) {
    var queue = [this]; // this refers to the root node of our BST
    while (queue.length) {
        var treeNode = queue.shift();
        iteratorFunc(treeNode.value);
        if (treeNode.left) {
            queue.push(treeNode.left);
        }
        if (treeNode.right) {
            queue.push(treeNode.right);
        }
    }
}

BST.prototype.getMinVal = function () {
    if (!this.left) return this.value;
    return this.left.getMinVal();
}

BST.prototype.getMaxVal = function () {
    if (!this.right) return this.value;
    return this.right.getMaxVal();
}

BST.prototype.delete = function (key) {
    let node = this;
    if (!node) return node;
    if (key < node.value) {
        node.left = node.left.delete(key);
    } else if (key > node.value) {
        node.right = node.right.delete(key);
    } else {
        if (!node.left) return node.right;
        else if (!node.right) return node.left;

        node.value = node.right.getMinVal();
        node.right = node.right.delete(node.value);
    }
    return node;
}

module.exports = BST;