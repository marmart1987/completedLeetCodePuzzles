/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  let result = [];
  for (i in nums1)  {
    if( (nums2.indexOf(nums1[i]) !== -1 ) 
       && result.indexOf(nums1[i]) === -1 )  {
           
       result.push(nums1[i])
    }
  }
  return result
};