/*
Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.

Example 1:

Input: [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Example 2:

Input: [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
*/
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    
    for(var i = digits.length; i--;){
        
        //start with last row and add 1
        digits[i] = 1 + digits[i];
        
        //if reaches 10 then current becomes 0 and add one to next
        if(digits[i] === 10){
            digits[i] = 0;
        } else {
            //if not 10 then we can return digit
            return digits;
        }
    }
    
    //we kept adding 1 until we reached last so we need to add 1 to front
    digits.unshift(1);
    
    
    return digits;
};