/*
Suppose an array sorted in ascending order is rotated at some pivot unknown to
 you beforehand.

(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

You are given a target value to search. If found in the array return its 
index, otherwise return -1.

You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the order of O(log n).

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
*/

function search(nums, target) {    
    
}

let inflectionPoint= (nums) => {
    //first element must be less than last element
    if (nums.length === 1) {
        return 0;
    }
    let left = 0;
    let right = nums.length -1;

    if (nums[left] < nums[right]) return 0;

    while(left <= right) {
        let mid = Math.floor((left+right)/2);

        if (nums[mid] > nums[mid+1]) {
            return mid+1;
        } else if (nums[mid] < nums[mid-1]) {
            return mid;
        }

        if (nums[mid] < nums[left]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
}

let nums =[4,5,6,7,0,1,2];
console.log(inflectionPoint(nums)); //4