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

let pivot = (arr) => {
    let left = 0;
    let right = arr.length-1;

    if (arr.length === 1) return 0;
    if (arr[left] < arr[right]) return 0;


    while(left <= right) {
        let mid = Math.floor((left+right)/2);

        if (arr[mid] > arr[mid+1]) return mid+1;
        if (arr[mid] < arr[mid-1]) return mid;

        if (arr[mid] > arr[left]) {
            left = mid +1;
        } else {
            right = mid-1;
        }

    }
}