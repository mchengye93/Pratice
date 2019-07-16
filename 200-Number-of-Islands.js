/*
Given a 2d grid map of '1's (land) and '0's (water), count the number of islands.
 An island is surrounded by water and is formed by connecting adjacent lands 
 horizontally or vertically. You may assume all four edges of the grid are all 
 surrounded by water.

Example 1:

Input:
11110
11010
11000
00000

Output: 1
Example 2:

Input:
11000
11000
00100
00011

Output: 3
*/
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    var count = 0;
    
    for (var row = 0; row < grid.length; row++) {
        for (var col = 0; col < grid[0].length; col++) {
            
            if (grid[row][col] === '1') {
                checkConnection(grid,row,col);
                count++;
            }
         
        }
    }
    
    return count;
    
};

var checkConnection = function (grid,row,col) {
    grid[row][col] = 'X';
    
    //check left
    if(col > 0) {
        if (grid[row][col-1] === '1') {
            grid[row][col-1] === 'X';
            checkConnection(grid,row,col-1);
        }
     
    }
    
    //check right
    if (col < grid[0].length-1) {
        if (grid[row][col+1] ==='1'){
            grid[row][col+1] === 'X';
            checkConnection(grid,row,col+1);
        }
     
    }
    //check top
    
    if (row > 0) {
        if(grid[row-1][col]==='1'){
            grid[row-1][col] === 'X';
            checkConnection(grid,row-1,col);
        }
   
    }
    
    //check bottom 
    if (row < grid.length -1) {
        if(grid[row+1][col]==='1'){
            grid[row+1][col] === 'X';
            checkConnection(grid,row+1,col);
        }
   
    }
    return;
    
    
}