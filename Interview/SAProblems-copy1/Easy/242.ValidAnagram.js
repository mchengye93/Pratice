/*
Given two strings s and t , write a function to determine if t is an anagram of s.

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

 //Time Complexity: O(N) SpaceComplexity: O(N)
var isAnagram = function(s, t) {
    if (s.length!== t.length) return false;

    let charCount = {};
    for (let i = 0; i < s.length; i++) {
        let letter = s[i];

        if(!charCount[letter]) {
            charCount[letter] = 1;
        } else {
            charCount[letter]++;
        }
    }

    for (let i = 0; i < t.length; i++){
        let letter = t[i];
        if (!charCount[letter]) {
            return false;
        } else {
            charCount[letter]--;
            if (charCount[letter] < 0) return false;
        }
    }
    return true;
    
};