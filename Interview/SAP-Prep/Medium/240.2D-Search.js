/*
Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following 
properties:

Integers in each row are sorted in ascending from left to right.
Integers in each column are sorted in ascending from top to bottom.
Example:

Consider the following matrix:

[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
Given target = 5, return true.

Given target = 20, return false.
*/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {

    if(matrix === null || matrix.length == 0) {
        return false;
    }
    

    let curRow = 0;
    let curCol = matrix[0].length -1;

    while(curRow < matrix.length && curCol >=0 ) {
        let curVal = matrix[curRow][curCol];
        if (curVal === target) {
            return true;
        }
        if (curVal < target) {
            curRow++;
        } else {
            curCol--;
        }
    }
    return false;
};