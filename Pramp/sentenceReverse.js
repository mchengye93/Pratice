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
    Reverse the array
    Then find words start and end and then reverse it
    
  */
 reverse(arr,0,arr.length-1);
 let wordStart = null;
 for (let i = 0; i < arr.length ; i++) {
   if (arr[i] === ' ') {
     if (wordStart !== null) {
       reverse(arr,wordStart,i-1);
       wordStart = null;
     }
   } else if ( i === arr.length - 1) {
     if (wordStart !== null) {
       reverse(arr,wordStart,i);
     }
     
   } else {
      if (wordStart === null) {
        wordStart = i;
      }
   }
   
 }
 return arr;


 
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