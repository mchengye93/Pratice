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

 //Runtime O(N^2) Space: O(1)
var longestPalindrome = function(s) {
    let startIdx = 0;
    let maxLength = 1;


    function expandingFromCenter(left,right) {
        let length = 0;

        while(s[left]===s[right] && left >=0 && right <= s.length) {
            length = right-left + 1;

            if(length > maxLength) {
                startIdx = left;
                maxLength = length;
            }
            left--;
            right++;
        }
        return length;
    }

    for (let i = 0; i < s.length;i++) {
        expandingFromCenter(i-1, i+1);
        expandingFromCenter(i, i+1);
        
    }
    return s.slice(startIdx, startIdx+maxLength);
   

};

