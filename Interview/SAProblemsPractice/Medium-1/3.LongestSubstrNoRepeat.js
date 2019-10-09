/*
Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
             Note that the answer must be a substring, "pwke" is a subsequence and
              not a substring.

*/
/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
 //Use like a window method where slide there window as we find character
 //Store index of last character
 //store a max length windown and update when we find bigger window
 
 let start = 0;
 let maxLength = 0;

 
 let letterIdx = {};
for (let i = 0; i < s.length; i++) {
    
    if (letterIdx[s[i]] >= start) start  = letterIdx[s[i]] + 1;
    if (i-start + 1 > maxLength) maxLength = i - start + 1;
    letterIdx[s[i]] = i;
}
return maxLength;

};