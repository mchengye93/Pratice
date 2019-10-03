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
    if (s === null || s.length === 0) return 0;
    let letters = {};
    let maxLength = 0;
    let currLength = 0;
    let start = 0;

    for (let i = 0; i < s.length; i++) {
        let letter = s[i];
        if(letters[letter] === undefined) {
            letters[letter] = i;
            currLength++;
        } else {
            if(letters[letter]) {
                start = letters[letter] + 1;
                
                if (start === i) currLength = 1;
                
                letters[letter] = i;
                if(i > start) {
                    currLength++;
                }
            }
        }
        if(currLength > maxLength) {
            maxLength = currLength;
        }
    }

    return maxLength;
 
};