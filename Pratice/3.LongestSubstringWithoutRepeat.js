var lengthOfLongestSubstring = function(s) {
    let charPos = {};
    let start = 0;
    let maxLength = 0;

    for (let i = 0 ; i < s.length; i++) {
        if (charPos[s[i]] >= start) {
            start = charPos[s[i]] + 1;
        }

        if ((i - start + 1) > maxLength) maxLength = i-start+1;
        charPos[s[i]] = i;
    }
    return maxLength;
    

}