/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//Time Complexity: O(n) Space Complexity: O(n)
var twoSum = function(nums, target) {
    let seenNums = {};
    
    for (let i = 0; i < nums.length; i++ ) {
        let complement = target - nums[i];
        
        
        if (seenNums[complement] !== undefined) {
            return [seenNums[complement], i];
        }
        seenNums[nums[i]] = i;
        
    }
    return -1;
       
};