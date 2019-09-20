/*
Given a static-sized array of integers arr, move all zeroes in the array to the end 
of the array. You should preserve the relative order of items in the array.
*/

function moveZerosToEnd(arr) {
	/**
	@param arr: integer[]
	@return: integer[]
	*/

  let result = [];
  let zeroCount = 0;
  
  //O(n+m) space: O(n)

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeroCount++;
    } else {
      result.push(arr[i]);
    }
  }
  
  
  for (let i = 0; i < zeroCount; i++ ) {
    result.push(0);
  }
  
  return result;
  
}

