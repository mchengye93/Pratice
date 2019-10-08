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
    let maxLength = 0;
    let start = 0;
    for (let i = 0; i <  s.length; i++) {
        let len1 = expandFromCenter(s,i-1,i+1);
        let len2 = expandFromCenter(s,i,i+1);
        if(len1 > maxLength || len2 > maxLength) start = i;
        maxLength = Math.max(len1, len2);

    }
    return s.slice(start,maxLength);
 
};

//function to expand from center and see if palindrome and then return length

var expandFromCenter = function(s,left,right) {
    let length = 0;
    while(right < s.length && left >=0) {
        if (s[left] === s[right]) {
            length = right - left;
            right++;
            left--;
        } else {
            break;
        }
    }
    return length;
}