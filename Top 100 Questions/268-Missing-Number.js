/*
array.

Example 1:

Input: [3,0,1]
Output: 2
Example 2:

Input: [9,6,4,2,3,5,7,0,1]
Output: 8
Note:
Your algorithm should run in linear runtime complexity. Could you 
implement it using only constant extra space complexity?
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    for (var i = 0; i <= nums.length; i++) {
        if (nums.indexOf(i) === -1) {
            return i;
        }
    }
};