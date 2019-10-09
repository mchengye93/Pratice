/*
Given a collection of intervals, merge all overlapping intervals.

Example 1:

Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
Example 2:

Input: [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
NOTE: input types have been changed on April 15, 2019. Please reset to default code definition 
to get new method signature.
*/
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

 //Time Complexity: O(NlogN) used sort, Space complexity: O(1) We sort inplace no extra data structure
var merge = function(intervals) {

    //Sort intervals 
    //look at current interval and see if intersect with next 
    //update min and max if intersect
    //take next interval and look at that and repeat
    if(intervals === null || intervals.length === 0) return [];
    intervals.sort((a,b) => a[0] -b[0]);
  
      let res = [intervals[0]];
     
      let x = 0;
      for (let i = 1; i < intervals.length; i++) {
          let currInterval = res[x];
          let nextInterval = intervals[i];
  
          if (nextInterval[0] <= currInterval[1]) {
              res[x][0] = Math.min(currInterval[0],nextInterval[0]);
              res[x][1] = Math.max(currInterval[1],nextInterval[1]);
          } else {
              res.push(intervals[i]);
              x++;
          }
      }
      return res;
      
 
}

