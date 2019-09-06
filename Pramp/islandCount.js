/*
Island Count
Given a 2D array binaryMatrix of 0s and 1s, implement a function getNumberOfIslands 
that returns the number of islands of 1s in binaryMatrix.

An island is defined as a group of adjacent values that are all 1s. A cell in 
binaryMatrix is considered adjacent to another cell if they are next to each either 
on the same row or column. Note that two values of 1 are not part of the same island 
if they’re sharing only a mutual “corner” (i.e. they are diagonally neighbors).

Explain and code the most efficient solution possible and analyze its time and space
 complexities.

 input:  binaryMatrix = [ [0,    1,    0,    1,    0],
                         [0,    0,    1,    1,    1],
                         [1,    0,    0,    1,    0],
                         [0,    1,    1,    0,    0],
                         [1,    0,    1,    0,    1] ]

output: 6 # since this is the number of islands in binaryMatrix.
          # See all 6 islands color-coded below.
*/
function getNumberOfIslands(binaryMatrix) {
    let islandCount = 0;
    // your code goes here
    for (let r = 0; r < binaryMatrix.length; r++) {
      let row = binaryMatrix[r];
      for (let c = 0; c < row.length; c++ ) {
        //check all surrounding lands
        if (binaryMatrix[r][c] === 1) {
          islandCount ++;
          checkSurrounding (r,c,islandCount);
          
        }
      }
    }
    
   function checkSurrounding(r,c,islandCount) {
    //left
    if(c > 0) {
      if (binaryMatrix[r][c-1] === 1) {
        binaryMatrix[r][c-1] = islandCount;
        checkSurrounding(r,c-1, islandCount);
      }
    }
     //check right
    if (c < binaryMatrix[0].length) {
      if (binaryMatrix[r][c+1] === 1) {
        binaryMatrix[r][c+1] = islandCount;
        checkSurrounding(r,c+1, islandCount);
      }
    }
     //check top
     if (r > 0) {
       if (binaryMatrix[r-1][c] === 1) {
         binaryMatrix[r-1][c] = islandCount;
         checkSurrounding(r-1,c, islandCount);
       }
     }
     
     //check buttom
     if (r < binaryMatrix.length) {
         if (binaryMatrix[r+1][c] === 1) {
         binaryMatrix[r+1][c] = islandCount;
         checkSurrounding(r+1,c, islandCount);
       }
     }
     
    return;
  }
    console.log(binaryMatrix);
    return islandCount;
    
  }
  
  