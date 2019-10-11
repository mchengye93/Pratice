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

 //Runtime: O(n) Space: O(n)
var lengthOfLongestSubstring = function(s) {
    let charPos = {};
    let maxLength = 0;
    let start = 0;

    
    for (let i = 0; i < s.length;i++) {
        
        if (charPos[s[i]] >= start) {
            start = charPos[s[i]] +1;
        }
        if (i - start + 1 > maxLength) {
            maxLength = i-start + 1;
      
        }
        charPos[s[i]] = i;
        
    }
   
    return maxLength;
    
};