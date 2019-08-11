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

module.exports = BST;