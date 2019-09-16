/*
Given a matrix of m x n elements (m rows, n columns), return all elements of the 
matrix in spiral order.

Example 1:

Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
Output: [1,2,3,6,9,8,7,4,5]
Example 2:

Input:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
*/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let result = [];
    
    
    let topRow = 0;
    let bottomRow = matrix.length-1;
    let leftCol = 0;
    let rightCol = matrix[0].length-1;
    
    
    
    let count = 0;
    
    while(count <  (matrix.length* matrix[0].length)) {
        //go right
        
        for (let i =leftCol; i <= rightCol; i++) {
            result.push(matrix[topRow][i]);
            count++;
            
        }
        topRow++;
  
        
        //go bottom
        for (let i = topRow; i <= bottomRow; i++) {
            result.push(matrix[i][rightCol]);
            count++;
        }
        rightCol--;
       
        
        //go left
        for (let i =rightCol; i >= leftCol; i--) {
            result.push(matrix[bottomRow][i]);
            count++;
        }
        bottomRow--;
        
        //go up
        for (let i = bottomRow; i >= topRow; i--) {
            result.push(matrix[i][leftCol]);
            count++;
            
        }
        leftCol++;
         
    }
    return result;
    
};