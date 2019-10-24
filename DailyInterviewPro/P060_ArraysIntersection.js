/**
 * Amazon
 *
 * Given two arrays, write a function to compute their intersection - the intersection means the numbers that are in both arrays.

    Example 1:
        Input: nums1 = [1,2,2,1], nums2 = [2,2]
        Output: [2]
    Example 2:
        Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
        Output: [9,4]
    Note:
        Each element in the result must be unique.
        The result can be in any order.
 */

const intersectionArr = (nums1, nums2) => {
    const intersection = (A, B) => {
        let noMap = new Map();
        A.forEach(e => noMap.set(e, true));
        let result = [];
        B.forEach(e => {
            if (noMap.get(e)) {
                result.push(e);
                noMap.set(e, false);
            }
        });
        return result;
    }
    return nums1.length < nums2.length ? intersection(nums1, nums2) : intersection(nums2, nums1);
}

const nums1 = [1, 2, 2, 1], nums2 = [2, 2];
console.log(intersectionArr(nums1, nums2));

const nums3 = [4, 9, 5], nums4 = [9, 4, 9, 8, 4];
console.log(intersectionArr(nums3, nums4));