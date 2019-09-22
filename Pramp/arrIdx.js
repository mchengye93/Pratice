/*
Given a sorted array arr of distinct integers, write a function indexEqualsValueSearch
 that returns the lowest index i for which arr[i] == i. Return -1 if there is no such 
 index. Analyze the time and space complexities of your solution and explain its 
 correctness.

 Examples:
 input: arr = [-8,0,2,5]
output: 2 # since arr[2] == 2

input: arr = [-1,0,3,6]
output: -1 # since no index in arr satisfies arr[i] == i.
*/
function indexEqualsValueSearch(arr) {
    /*
    Given: 
    Input: Sorted arr of unique integers
    Output: 1st where arr[i]===i , return -1
    
    
  Steps: 
   BinarySearch 
      first , last, middle
      if current arr[i] === i 
           - save current i;
      if arr[i] > i // all right side is invalid
           // go left
      if arr[i] < i // all left side is invalid
            //go right
       //look at the left
          
  
    */
    let start = 0;
    let end = arr.length-1;
    
    let middle;
    
  
    let firstVal = -1;
   
    //O(logN) ,space: O(1)
    while (start <= end) {
      middle = Math.floor((end + start)/2);
      
      if (arr[middle]===middle) {
        firstVal = middle;
        //go left
        end = middle-1;
        
      }
      //left is invalid
      else if (arr[middle] < middle) {
        //look at right
        start = middle+1;
        
      }
      
      //right values are invalid
      else if (arr[middle] > middle) {
        end = middle-1;
      }
     
    }
    return firstVal;
  }