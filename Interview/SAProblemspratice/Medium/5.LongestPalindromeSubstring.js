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
    let maxLength = 1;
    let start = 0;

    let expandCenter = (left,right) => {
        let length =1;
        while (s[left] === s[right] && left >=0 && right < s.length) {
            length = right-left+1;

            if (length > maxLength) {
                start = left;
                maxLength = length;
            }
        }
        left--;
        right++;
    }
    for (let i = 0; i < s.length; i++) {
        expandCenter(i, i+1);
        expandCenter(i-1,i+1);
    }
    return s.slice(start, start+maxLength);

};
