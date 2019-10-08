/*
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length 
of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: "cbbd"
Output: "bb"
*/
/**
 * @param {string} s
 * @return {string}
 */

 //Time Complexity: O(N^2) Space Complexity: O(1)
var longestPalindrome = function(s) {
    let maxLength = 1;
    let startIdx = 0;
    

function expandFromCenter (left,right) {

    while(right < s.length && left >=0 && s[left] === s[right]) {
      
    const currentPalLength = right-left + 1;
        if (currentPalLength > maxLength) {
            maxLength = currentPalLength;
            startIdx = left;
    }
    right++;
    left--;
    }
 
}
      for (let i = 0; i < s.length; i++) {
       expandFromCenter(i-1, i+1);
       expandFromCenter(i, i+1);
   }

    return s.slice(startIdx,startIdx+maxLength);
 
};