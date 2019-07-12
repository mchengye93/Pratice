/*
We are given two sentences A and B.  (A sentence is a string of space separated
     words.  Each word consists only of lowercase letters.)

A word is uncommon if it appears exactly once in one of the sentences, and 
does not appear in the other sentence.

Return a list of all uncommon words. 
You may return the list in any order.

Example 1:

Input: A = "this apple is sweet", B = "this apple is sour"
Output: ["sweet","sour"]
Example 2:

Input: A = "apple apple", B = "banana"
Output: ["banana"]
 
Note:

0 <= A.length <= 200
0 <= B.length <= 200
A and B both contain only spaces and lowercase letters.
*/
/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function(A, B) {
    var uncommon = {};
    
    var a = A.split(' ');
    var b = B.split(' ');
    
    for (var i= 0; i < a.length ; i++) {
        if (uncommon[a[i]] === undefined){
            uncommon[a[i]] = 1;
        }
        
        else if (uncommon[a[i]] === 1) {
            delete uncommon[a[i]];
        }
        
    }
    for (var i= 0; i < b.length ; i++) {
        if (uncommon[b[i]] === undefined){
            uncommon[b[i]] = 1;
        }
        else if (uncommon[b[i]]) {
            delete uncommon[b[i]];
        }
    }
    
    return Object.keys(uncommon);
}
