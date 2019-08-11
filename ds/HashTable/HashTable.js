function HashTable(size) {
    this.buckets = Array(size);
    this.numBuckets = this.buckets.length;
}

function HashNode(key, value, next) {
    this.key = key;
    this.value = value;
    this.next = next;
}

HashTable.prototype.hash = function (key) {
    var total = 0;
    for (let i = 0; i < key.length; i++) {
        total += key.charCodeAt(i);
    }
    var bucket = total % this.numBuckets;
    return bucket;
}

module.exports = HashTable;