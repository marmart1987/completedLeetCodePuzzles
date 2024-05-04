/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    let posNums = nums.filter((element) => element > 0)
    function bothExist(element){
        if(nums.includes(-element)){return true}
        return false
    }
    let answers = posNums.filter(bothExist)
    if(answers.length  === 0){return -1}
    let max = 0;
    function maximumInArray (element){
        max = Math.max(max,element)
    }
    answers.forEach(maximumInArray)
    return max
};