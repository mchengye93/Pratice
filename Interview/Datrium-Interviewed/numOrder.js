/*
Given an array of unorder numbers find the missing number in the array
*/

let missingNum = (arr) => {

}

/* HashMap approach: Time Complexity: O(n) Space: O(n) 


let missingNum = (arr) => {

    let nums = {};

    for (let i = 0; i < arr.length; i++) {
        if(nums[arr[i]] === undefined) nums[arr[i]] = 1;
    }

    for (let i = 1; i <=arr.length; i++) {
        if(!nums[i]) return i;
    }
}


*/

/*Sort array approach: Time O(nlogn) Space:(1) 
let missingNum = (arr) => {
    arr.sort();
   

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] !== i+1) return i+1;
    }
    return arr.length + 1;
}

*/

/*Sum approach : Time: O(n) Space:1 */
let missingNum = (arr) => {
    let sum = 0;
    let arrSum = 0;
   

    for (let i = 0; i <= arr.length; i++) {
        sum += i + 1;
        if(i < arr.length) arrSum += arr[i];
    }
    return sum-arrSum;
}


let arr = [1,3,4,5];
console.log(missingNum(arr)); //2

