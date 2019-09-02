/**
 * Goldman Sach's
 * 
 * Given a list of numbers L, implement a method sum(i, j) which returns the sum from the sublist L[i:j] (including i, excluding j).
 * For example, given L = [1, 2, 3, 4, 5], sum(1, 3) should return sum([2, 3]), which is 5.
 * You can assume that you can do some pre-processing. sum() should be optimized over the pre-processing step.
 */
class SubArraySum {
    constructor(array) {
        this.total = 0;
        this.sumArr = [this.total];
        for (let i = 0; i < array.length; i++) {
            const e = array[i];
            this.total += e;
            this.sumArr.push(this.total)
        }
    }

    sum(i, j) {
        if (i < 0 || j > this.sumArr.length || i > j) {
            return null;
        } else {
            return this.sumArr[j] - this.sumArr[i];
        }
    }
}

let sub = new SubArraySum([1, 2, 3, 4, 5]);
console.log(sub.sum(2, 4));