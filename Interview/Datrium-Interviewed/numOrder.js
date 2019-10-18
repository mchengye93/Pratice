/*
Given an array of unorder numbers find the missing number in the array
*/

let missingNum = (arr) => {

}

/* HashMap approach: Time Complexity: O(n) Space: O(n) */


let missingNum = (arr) => {

    let nums = {};

    for (let i = 0; i < arr.length; i++) {
        if(nums[arr[i]] === undefined) nums[arr[i]] = 1;
    }

    for (let i = 1; i <=arr.length; i++) {
        if(!nums[i]) return i;
    }
}

