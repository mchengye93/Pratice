/*
Given a string s, find the longest palindromic substring in s. You may assume that 
the maximum length of s is 1000.

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
    //go through each str
    let palindromeWord = '';
    for (let i = 0; i < s.length; i++) {
        for (let x = i; x < s.length+1; x++) {
            let word = s.substring(i,x);
            let reverse = word.split('').reverse().join('');
            //console.log(word);
            //console.log(reverse);
            if (word === reverse && word.length > palindromeWord.length) {
                palindromeWord = word;
            }
        }
    
    }
    return palindromeWord;
};