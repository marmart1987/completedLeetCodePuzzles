/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
    let pos = [];
    let neg = [];
    let out = [];
    for (i in nums) {
        if (nums[i] > 0) {
            pos.push(nums[i]);
        } else {
            neg.push(nums[i]);
        }
    }
    for (j = 0; j < pos.length; j++) {
        out.push(pos[j]);
        out.push(neg[j]);
    }
    return out;
};