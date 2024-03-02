/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    for (i in nums){
       nums[i] = nums[i] ** 2
    }
    function compareNumbers(a, b) {
    return a - b;
    }
    nums.sort(compareNumbers)
    return nums
};