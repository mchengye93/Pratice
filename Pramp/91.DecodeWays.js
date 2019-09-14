/*
A message containing letters from A-Z is being encoded to numbers using the following mapping:

'A' -> 1
'B' -> 2
...
'Z' -> 26
Given a non-empty string containing only digits, determine the total number of ways to decode it.

Example 1:

Input: "12"
Output: 2
Explanation: It could be decoded as "AB" (1 2) or "L" (12).
Example 2:

Input: "226"
Output: 3
Explanation: It could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).
*/
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {

    if (s.length === 0 || s[0]==='0') {
        return 0;
    }
    let dp = [1,1];
    
    for (let i = 2; i < s.length+1; i++) {
        let result = 0;
        let num = parseInt(s.slice(i-2,i));
        
        if (num >= 10 && num <= 26) {
            result = dp[i-2];
        }
        if (s[i-1] != '0') {
            result += dp[i-1];
        }
        dp.push(result);
    }
    return dp[s.length];
    

};