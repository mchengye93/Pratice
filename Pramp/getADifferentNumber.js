/*
Given an array of unique numbers find the smallest positive  number.
input:  arr = [0, 1, 2, 3]

output: 4 
*/
function getDifferentNumber(arr) {
    // your code goes here
    
    //Go through array and store numbers into hashMap
    
    let numMap = {};
    
    let maxNum = 0;
    
    for (let i = 0; i < arr.length; i++) {
      let num = arr[i];
      numMap[num] = 1;
      
      if (num > maxNum) {
        maxNum = num;
      }
    }
    
    for (let i = 0; i <= arr.length; i++) {
      if (numMap[i] === undefined ) {
        return i;
      }
    }
  }