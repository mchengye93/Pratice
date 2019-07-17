/*
Given two strings s and t , write a function to determine if t is an anagram 
of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your 
solution to such case?
*/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    var letterCount = {};
    for (var i = 0; i < s.length; i++) {
       if(letterCount[s[i]] === undefined){
          letterCount[s[i]] = 1; 
       } else {
           letterCount[s[i]] = 1 + letterCount[s[i]]; 
       }
    }
    
    for (var i = 0; i < t.length; i++) {
        if (letterCount[t[i]] === undefined){
            return false;
        } else {
            letterCount[t[i]] = letterCount[t[i]]-1;
            if (letterCount[t[i]] < 0) {
                return false;
            }
        }
    }
    return true;
};