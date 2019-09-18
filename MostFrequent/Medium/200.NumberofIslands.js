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
    
    let islandCount = 0;
    
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[r].length; c++) {
            if (grid[r][c] == 1) {
                islandCount++;
                explore(grid,r,c);
            }
        }
    }
    return islandCount;
    
};

let explore = function (grid, row, col) {
   let queue = [[row,col]];
    //console.log(queue);
    
    while(queue.length !== 0) {
        
        let [row,col] = queue.pop();
       
        
        if (grid[row][col] == 1) {
            grid[row][col] = 0;
            
            
            //top
            if(isValid(grid,row-1,col)) queue.push([row-1,col]);
            
            //bottom
            if(isValid(grid,row+1,col)) queue.push([row+1,col]);
            
            //right
            if (isValid(grid,row,col+1)) queue.push([row,col+1]);
            
            //left
            if(isValid(grid,row,col-1)) queue.push([row,col-1]);
        }
       
    }
    
};

let isValid = function (grid, r,c) {
    let rowMax = grid.length;
    let colMax = grid[0].length;
    
    return r >=0 && r < rowMax && c >=0 && c < colMax;
}