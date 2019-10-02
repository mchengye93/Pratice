/*
Given an array nums, write a function to move all 0's to the end of it while maintaining 
the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Note:

You must do this in-place without making a copy of the array.
Minimize the total number of operations.
*/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//RunTime: O(N) Space Complexity: O(1)
var moveZeroes = function(nums) {
    let start = 0;
    let zeroes = 0;

    for (let i = 0; i < nums.length;i++) {
        if (nums[i] !== 0) {
            nums[start] = nums[i];
            start++;
        } else {
            zeroes++;
        }
    }
    for (let i = 0; i < zeroes; i++) {
        nums[start] = 0;
        start++;
    }
  
};