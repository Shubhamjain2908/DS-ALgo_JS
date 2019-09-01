class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    pop() {
        const lastItem = this.data[this.length - 1];
        // this.data[this.length - 1] = undefined;
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    delete(index) {
        const item = this.data[index];
        this.shiftItems(index);
        return item;
    }

    shiftItems(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];

        }
        delete this.data[this.length - 1];
        this.length--;
    }

}

const newArr = new MyArray();
newArr.push('Hello');
newArr.push('Ji');
newArr.push('How');
newArr.push('Are');
newArr.push('ypu');
newArr.pop();
newArr.delete(1);
// newArr.push(9);
console.log(newArr);