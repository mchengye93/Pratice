/*
Given a string, find the first non-repeating character in it and return it's 
index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
Note: You may assume the string contain only lowercase letters.
*/
/**
 * @param {string} s
 * @return {number}
 */

 //Runtime: O(N) Space: O(N)
var firstUniqChar = function(s) {
    let charCount = {};
    for (let i = 0 ; i < s.length; i++) {
        if (charCount[s[i]] === undefined) {
            charCount[s[i]] = 1;
        } else {
            charCount[s[i]]++;
        }
    }
    for (let i = 0; i < s.length; i++) {
        if(charCount[s[i]] === 1) return i;
    }
    return -1;
    
};