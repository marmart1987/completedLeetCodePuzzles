/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let z = nums.indexOf(val);
    while(z >-1){
        nums.splice(z,1);
        z = nums.indexOf(val);
    }
    return nums.length;
};