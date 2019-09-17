/*
A letter can be encoded to a number in the following way:
'A' -> '1', 'B' -> '2', 'C' -> '3', ..., 'Z' -> '26'

A message is a string of uppercase letters, and it is encoded first using this scheme. For example, 'AZB' -> '1262'

Given a string of digits S from 0-9 representing an encoded message, return the number of ways to decode it.

Examples:
input:  S = '1262'
output: 3
explanation: There are 3 messages that encode to '1262': 'AZB', 'ABFB', and 'LFB'

*/
function decodeVariations(s) {
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

}
