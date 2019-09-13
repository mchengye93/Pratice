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
  
        //Given a string find out total ways to decode it
      let dp = [0];
      
      //check first two numbers
      if (parseInt(S[0]) > 0) {
        dp[0] = 1;
      } else {
        dp[0] = 0;
      }
      
     
    
       
      for (let i = 1; i < S.length; i++) {
        let num = parseInt(S[i-1]);
        let doubleDigit = parseInt(S.slice(i-1,i+1));
        
        console.log(num);
        console.log(doubleDigit);
        
        if (num > 0) {
          dp[i] = dp[i-1];
        } 
        
    
        if (doubleDigit >= 10 && doubleDigit <=26) {
          dp[i] +=1;
        }
        
      }
      console.log(dp[S.length-1]);
      return dp[S.length-1];
    
    
};