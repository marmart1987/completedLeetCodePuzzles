/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    for (let i in nums){
        let lastIndex = nums.lastIndexOf(nums[i]) 
        //console.log(lastIndex, i)
        if(lastIndex == i){
            return nums[i]
        }else{
            nums.splice(lastIndex,1)
        }
       // console.log(nums)
    }
};