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
function spiralCopy(inputMatrix) {
  //clockwise
  //row 0 ..end - end-bottom, bottom-left, left-up-end-bottom
  
  let spiralNums = [];
  let row = 0;
  let col = 0;
 
  let rowMax = inputMatrix.length;
  let colMax = inputMatrix.length;
  let rowMin = 0;
  let colMin = 0;
  //go right row .. colum 0-length-1  add one to rows end
  
  //go buttom row...end colum length-1  subtract end of colum-1
  
  //go left  end..row .. end to 0 add one to colum = colum+1;
  
  //go up   endrow- 2ndrow stays at end of row subtract one to columns end
  
  // row  col... colMax
  while (row < rowMax && col < colMax) {
      //go right adds 1 to rowMin
      spiralNums.push(inputMatrix[rowMin][col]);
      col++;
      row= 1;
    
  }
  
  // colMax row...rowMax

  while (row < rowMax) {
    //down subtracts 1 to maxCol
    
     spiralNums.push(inputMatrix[row][colMax]);
     row++;
     rowMin +=1;
        
    
  }
  
  // rowMax colMax...col
  while (col >= 0) {
    //adds 1 to rowMin
    spiralNums.push(inputMatrix[rowMax][colMax]);
    col--;
    rowMax -=1;
  }
  
  // col rowMax...row
  while (row >= rowMin){
    //add 1 to colMin
    spiralNums.push(inputMatrix[rowMax]col);
    row--;
    colMax -=1;
  }

      
    
  
