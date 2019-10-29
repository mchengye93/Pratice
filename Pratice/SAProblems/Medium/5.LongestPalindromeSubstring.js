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
var longestPalindrome = function(s) {
    let start = 0;
    let maxLength = 1;

    let expandCenter = (left,right) => {
        while (left >=0 && right < s.length && left <= right && s[left] === s[right]) {
            let length = right -left + 1;
            if (length > maxLength) {
                maxLength = length;
                start = left;
            }
            left--;
            right++;
        }
    }
    for (let i = 0; i < s.length; i++) {
        expandCenter(i, i+1);
        expandCenter(i-1,i+1);
    }
    return s.slice(start,start+maxLength);
};
