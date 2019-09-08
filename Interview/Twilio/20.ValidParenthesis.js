/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', 
determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:

Input: "()"
Output: true
Example 2:

Input: "()[]{}"
Output: true
Example 3:

Input: "(]"
Output: false
Example 4:

Input: "([)]"
Output: false
Example 5:

Input: "{[]}"
Output: true
*/
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length%2 !==0) {
        return false;
    }
    let arr = [];
    
    for (let i = 0; i < s.length; i++) {
        console.log(arr);
        if (s[i] === '(' ||s[i] === '{' || s[i] ==='[') {
            arr.push(s[i]);
        } else {
            //get last element from array
            let currentVal = arr.pop();
            if (s[i] === ')' & currentVal !== '(') {
                return false;
            }
            
            if (s[i] === ']' & currentVal !== '[') {
                return false;
            }
            
            if (s[i] === '}' & currentVal !== '{') {
                return false;
            }
            
        }
    }
    if (arr.length === 0) {
        return true;
    }
    return false;
};