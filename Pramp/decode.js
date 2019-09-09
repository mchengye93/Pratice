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
function decodeVariations(S):
    N = S.length
    dp = new Array(N)
    dp[N] = 1
    for i from N-1 to 0:
        if S[i] == '0':
            dp[i] = 0
        else if S[i] == '1':
            dp[i] = dp[i+1] + dp[i+2]
        else if S[i] == '2':
            dp[i] = dp[i+1]
            if i+1 < S.length && S[i+1] <= '6':
                dp[i] += dp[i+2]
        else:
            dp[i] = dp[i+1]

    return dp[0]