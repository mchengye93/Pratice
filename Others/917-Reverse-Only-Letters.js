/*
Given a string S, return the "reversed" string where all characters that
 are not a letter stay in the same place, and all letters reverse their 
 positions.

Example 1:

Input: "ab-cd"
Output: "dc-ba"
Example 2:

Input: "a-bC-dEf-ghIj"
Output: "j-Ih-gfE-dCba"
Example 3:

Input: "Test1ng-Leet=code-Q!"
Output: "Qedo1ct-eeLg=ntse-T!"

Note:

S.length <= 100
33 <= S[i].ASCIIcode <= 122 
S doesn't contain \ or "
*/
/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
    var start = 0;
    var end = S.length-1;
    while(start !== Math.min(S.length/2) && end !== Math.min(S.length/2)) {
        //if either is not a letter move to a letter position
        while (S[start] === '-'){
            start = start + 1;
        }

        while(S[end] === '-') {
            end = end-1;
        }
       
        var temp = S[start];
        
        S[start] = S[end];
        S[end] = temp;

        start = start + 1;
        end = end -1;
        
    }
    console.log(S);
};

reverseOnlyLetters("ab-cd");