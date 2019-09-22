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
      
    */
   
   
   /*
   -Reverse arr
   -Find words reverse the word
       -Ignore spaces
    
   */
    let start = 0;
    let end = arr.length-1;
    while (start != end) {
      let endLetter = arr[end];
      let startLetter = arr[start];
      
      arr[start] = endLetter;
      arr[end] = startLetter;
      start++;
      end--;
    }
    
    //reverse words 
    
  }
  function reverse(arr,start,end) {
    while (start < end) {
      let temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
    }
  }