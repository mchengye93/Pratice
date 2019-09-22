/*
You are given an array of characters arr that consists of sequences of characters 
separated by space characters. Each space-delimited sequence of characters defines a 
word.

Implement a function reverseWords that reverses the order of the words in the array
 in the most efficient manner.

Explain your solution and analyze its time and space complexities.

Example:
input:  arr = [ 'p', 'e', 'r', 'f', 'e', 'c', 't', '  ',
                'm', 'a', 'k', 'e', 's', '  ',
                'p', 'r', 'a', 'c', 't', 'i', 'c', 'e' ]

output: [ 'p', 'r', 'a', 'c', 't', 'i', 'c', 'e', '  ',
          'm', 'a', 'k', 'e', 's', '  ',
          'p', 'e', 'r', 'f', 'e', 'c', 't' ]
*/

function reverseWords(arr) {
    /*
    Input: Array of letters where words are seperate with space
    Output: Reverse order the words 
    
    
    Steps:
      Find the words - start index and end index
      Naive:
       Find the words - start index and end index O(N)
       Save into an array
       Take that array an read it reversely O(N)
       -Slice and push into a new array O(N)
    */
    let arrIdx = [];
    let reverseArr = [];
    
    let start = 0;
    let end = 0;
    for (let i=0; i < arr.length; i++ ) {
      if (arr[i] === ' ' || arr[i].length > 1) {
        end = i;
        
        arrIdx.push([start,end]);
        
        arrIdx.push([start,i+1]);
        start = i+1;
        
        
      }
      if (i === arr.length-1) {
        end = i+1;
        arrIdx.push([start,end]);
      }
    }
    
    for (let i = arrIdx.length-1; i >= 0; i--) {
      let start = arrIdx[i][0];
      let end = arrIdx[i][1];
      
      reverseArr.concat(arr.slice(start,end));
      if (i !== 0) {
        reverseArr.push(' '); //this  is cat, "  "
      }
      
    }
    return reverseArr;
}