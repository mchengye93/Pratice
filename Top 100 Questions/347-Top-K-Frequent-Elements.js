/*
Given a non-empty array of integers, return the k most frequent elements.

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
Note:

You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
Your algorithm's time complexity must be better than O(n log n), where n 
is the array's size.
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    var numCount = {};
    var kCountNum = [];
    for (var i= 0; i < nums.length; i++) {
        if (numCount[nums[i]] === undefined){
            numCount[nums[i]] = 1;
        } else {
            numCount[nums[i]] = numCount[nums[i]]+1;
        }
    }
    
    for (var key in numCount) {
        if (numCount[key] >= k) {
            kCountNum.push(key);
        }
    }
    return kCountNum;
};