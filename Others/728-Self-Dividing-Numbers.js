/*
A self-dividing number is a number that is divisible by 
every digit it contains.

For example, 128 is a self-dividing number because 128 % 1 == 0,
 128 % 2 == 0, and 128 % 8 == 0.

Also, a self-dividing number is not allowed to contain the digit
 zero.

Given a lower and upper number bound, output a list of every 
possible self dividing number, including the bounds if possible.

Example 1:
Input: 
left = 1, right = 22
Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]
Note:

The boundaries of each input argument are 1 <= left <= right <= 10000.
*/

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    var selfDivisibleNums = [];
    for (var i = left; i <= right; i++) { 
        var str = i +'';
        var arr = str.split('');
    
        var divisible = true;
        if (arr.indexOf('0') !== -1) {
            divisible = false;
        }
        for (var x = 0; x < arr.length;x++) {
            if ( i % arr[x] !== 0) {
                divisible = false;
            }
        }
        if( divisible) {
            selfDivisibleNums.push(i);
            
        }

    }
    
    return selfDivisibleNums
    
};