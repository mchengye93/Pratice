/*
Given a non-empty array of integers, every element appears twice except for one.
 Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it 
without using extra memory?

Example 1:

Input: [2,2,1]
Output: 1
Example 2:

Input: [4,1,2,1,2]
Output: 4
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var noDuplicate = {};
    
    for (var i = 0; i < nums.length; i++){
        if (noDuplicate[nums[i]] === undefined){
            noDuplicate[nums[i]] = 1;
        } else {
            delete noDuplicate[nums[i]];
        }
    }
    return Object.keys(noDuplicate)[0];
};