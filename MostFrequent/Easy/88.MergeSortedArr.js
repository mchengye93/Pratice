/*
Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one 
sorted array.

Note:

The number of elements initialized in nums1 and nums2 are m and n respectively.
You may assume that nums1 has enough space (size that is greater or equal to m + n)
 to hold additional elements from nums2.
Example:

Input:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

Output: [1,2,2,3,5,6]
*/
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let nums1Copy = nums1.slice();
    
    let i = 0;
    let x = 0;
    let l = 0;
    while( i < m && x < n) {
        
        if (nums1Copy[i] < nums2[x] ) {
            nums1[l] = nums1Copy[i];
            i++;
            l++;
        } else {
            nums1[l] = nums2[x];
            x++;
            l++;
        }
    }
    
    while(i < m) {
        nums1[l] = nums1Copy[i];
        i++;
        l++;
    }
    
    while(x < n) {
        nums1[l] = nums2[x];
        x++;
        l++;
    }
    
};