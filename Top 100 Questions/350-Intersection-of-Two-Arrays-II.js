/*
Given two arrays, write a function to compute their intersection.

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Note:

Each element in the result should appear as many times as it shows in both arrays.
The result can be in any order.
Follow up:

What if the given array is already sorted? How would you optimize your algorithm?
What if nums1's size is small compared to nums2's size? Which algorithm is better?
What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?
*/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    var numCount = {};
    var intersection = [];
    if (nums1.length >= nums2.length) {
        for (var i= 0; i < nums1.length; i++) {
            if (numCount[nums1[i]] === undefined){
                numCount[nums1[i]] = 1;
            } else {
                numCount[nums1[i]] = numCount[nums1[i]] +1;
            }
        }
        
        for (var i = 0; i < nums2.length; i++) {
            if (numCount[nums2[i]] !== undefined) {
                intersection.push(nums2[i]);
                numCount[nums2[i]] = numCount[nums2[i]] -1;
                if (numCount[nums2[i]] === 0) {
                    delete numCount[nums2[i]];
                }
            }
        }
        
    } else {
        for (var i= 0; i < nums2.length; i++) {
            if (numCount[nums2[i]] === undefined){
                numCount[nums2[i]] = 1;
            } else {
                numCount[nums2[i]] = numCount[nums2[i]] +1;
            }
        }
        
        for (var i = 0; i < nums1.length; i++) {
            if (numCount[nums1[i]] !== undefined) {
                intersection.push(nums1[i]);
                numCount[nums1[i]] = numCount[nums1[i]] -1;
                if (numCount[nums1[i]] === 0) {
                    delete numCount[nums1[i]];
                }
            }
        }
        
    }
    return intersection;
    
};