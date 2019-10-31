/*
Given a string, determine if it is a palindrome, considering only alphanumeric 
characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:

Input: "A man, a plan, a canal: Panama"
Output: true
Example 2:

Input: "race a car"
Output: false
*/

function isPalindrome(s) {

    //Time Complexity = O(N)
    //sanitize and remove ',', '_', '-'
    s = s.toLowerCase().replace(/[\W_]/g, "");
    let left = 0; 
    let right = s.length -1;

    while(left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

module.exports = isPalindrome;
