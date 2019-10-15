/*
Given a list of integers return maxCount
*/

//Runtime: O(n) Space: O(n)
// let maxCount = function(arr) {
//     if (arr.length === 0 || arr === null) return -1;
//     let hashMap = {};
//     let maxInt = arr[0];
//     let maxCount = 1;

//     for (let i = 0; i < arr.length; i++) {
//         if(hashMap[arr[i]] === undefined) {
//             hashMap[arr[i]] = 1;
//         } else {
//             hashMap[arr[i]]++;
//             if(hashMap[arr[i]] > maxCount) {
//                 maxCount = hashMap[arr[i]];
//                 maxInt= arr[i];
//             }
//         }
//     }
//     return maxInt;
// }

//Runtime: O(nlogn) Space:O(1)
let maxCount = function(arr) {
    if(arr.length === 0 || arr === null) return -1;
    arr.sort((a,b) => a-b);
    let maxCount = 1;
    let maxInt = arr[0];

    let currentInt = arr[0];
    let currentCount = 1;
    for (let i = 1; i < arr.length; i++) {
        if (currentInt !== arr[i]) {
            currentCount = 1;
            currentInt = arr[i];
        } else {
            currentCount++;
            if(currentCount > maxCount) {
                maxCount = currentCount;
                maxInt = arr[i];
            }
        }
    }
    return maxInt;

}


let arr = [1,2,3,7,4,5,6,6,6,7,7,7,8,8,8,8,8];
console.log(maxCount(arr));