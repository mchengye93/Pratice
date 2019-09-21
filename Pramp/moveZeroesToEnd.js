/*
Given a static-sized array of integers arr, move all zeroes in the array to the end 
of the array. You should preserve the relative order of items in the array.
*/

function moveZerosToEnd(arr) {
	/**
	@param arr: integer[]
	@return: integer[]
	*/


  let zeroCount = 0;
  
  //O(n+n+m) 
  let idx = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeroCount++;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[idx] = arr[i];
      idx++;
    }
  }
  
  for (let i = arr.length-1; zeroCount !== 0; i--) {
    arr[i] = 0;
    zeroCount--;
  }
  
  
  
  
  
  return arr;
  
}

