/*
Given a non-empty string s and a dictionary wordDict containing a list of non-empty
 words, determine if s can be segmented into a space-separated sequence of one or more
  dictionary words.

Note:

The same word in the dictionary may be reused multiple times in the segmentation.
You may assume the dictionary does not contain duplicate words.
Example 1:

Input: s = "leetcode", wordDict = ["leet", "code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".
Example 2:

Input: s = "applepenapple", wordDict = ["apple", "pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
             Note that you are allowed to reuse a dictionary word.
Example 3:

Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
Output: false
*/

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
   

    var possible = [];
    possible[0] = true;
    
    for(var i = 0; i < s.length; i++) {
        
        //if previous index found possible word on index move forward onto next word
        if(possible[i]) {
            //find if it is possible to find wordDict from i to j
            for(var j = i + 1; j <= s.length; j++) {
                var str = s.substring(i, j);

                //if word exist we mark index of possible words to be true
                if(wordDict.indexOf(str) !== -1) {
                    possible[j] = true;
                }
            }
        }
    }
    
    //if we can get to last index of string with words that are true then we have possible word
    return possible[s.length] === true;
};