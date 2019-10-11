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

 //Runtime: O(n^2) Space: O(1)
var longestPalindrome = function(s) {
    let start = 0;
    let maxLength = 1;
    function expandFromCenter(left,right) {
        let length = 1;
        while(left >= 0 && right <= s.length && s[left] === s[right]) {
            length = right - left + 1;
            
        if (length > maxLength) {
            maxLength = length;
            start = left;
            }
            
            left--;
            right++;
        }
    
    }
    for (let i = 0; i < s.length; i++) {
        expandFromCenter(i-1,i+1);
        expandFromCenter(i,i+1);

    }
    return s.slice(start,start+maxLength);


};

