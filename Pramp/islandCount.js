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

Hints:
If your peer is stuck, ask them if they know how to traverse a undirected graph.
At this point, you peer may come up with a recursive solution by using a Breadth-First
 Search (BFS) or a Depth-First Search (DFS) algorithm. While this works, see if you 
 can nudge them toward an iterative solution. This is not a must, but preferable.
Make sure that your peer’s code does not access out of bound indices, especially when 
trying to traverse adjacent cells in binaryMatrix.
Watch out for duplicate island counting in your peer’s code. It’s important that a 
visited cell of 1 is marked properly to avoid redundant counting.
Any solution that takes more than O(N⋅M) time isn’t optimal.

Answer:
This problem is very similar to counting the number of connected components in an Undirected Graph. 
However, Graph Theory isn’t necessary to solve this problem or to understand its 
solution. In an undirected graph, a connected component is a group of vertices in 
which every vertex is connected to at least one other vertex. In a similar way, an 
island in the matrix is a group of adjacent (connected) 1s.

To solve this problem, we’ll traverse binaryMatrix and every time we come across a 
cell of 1 we’ll do the following: Change that cell and all its vertically and 
horizontally (but not diagonally) adjacent 1s into -1s. We do this “expansion” in 
order to avoid recounting of islands. Increment islands - which is our counter for
 number of islands - by 1. Expanding from a cell whose value is 1 to other adjacent 
 1s in binaryMatrix is similar to running a Breadth-First Search (BFS) or a Depth-First 
 Search (DFS).

In our case, we’ll avoid using a recursion and instead opt for an iterative approach
to expand to all adjacent 1s. We do so by using queue that holds the next indices to 
visit. We keep expanding to other adjacent 1s as long as the queue is not empty. 
Whenever we encounter a value of -1 in our traversal, we ignore it since it is part 
on an island we’ve already counted.

Psuedocode:
function getNumberOfIslands(binaryMatrix):
    islands = 0
    rows = binaryMatrix.length # number of rows
    cols = binaryMatrix[0].length # number of columns

    for i from 0 to rows-1:
        for j from 0 to cols-1:
            if (binaryMatrix[i][j] == 1):
                markIsland(binaryMatrix, rows, cols, i, j)
                islands++
                
    return islands


function markIsland(binaryMatrix, rows, cols, i, j):
    q = new Queue()
    q.push([i,j])
    while (!q.isEmpty()):
        item = q.pop()
        x = item[0]
        y = item[1]
        if (binaryMatrix[x][y] == 1):
            binaryMatrix[x][y] = -1
            pushIfValid(q, rows, cols, x-1, y)
            pushIfValid(q, rows, cols, x, y-1)
            pushIfValid(q, rows, cols, x+1, y)
            pushIfValid(q, rows, cols, x, y+1)


function pushIfValid(q, rows, cols, x, y):
    if (x >= 0 AND x < rows AND y >= 0 AND y < cols):
        q.push([x,y])
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
  
  