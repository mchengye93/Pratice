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
    if (intervals.length === 0 || intervals === null) return [];
    intervals.sort((a,b)=> a[0]- b[0]);
    let results = [intervals[0]];
    let idx  = 0;

    for (let i = 1; i < intervals.length; i++ ) {
        let currentIntMin = results[idx][0];
        let currentIntMax = results[idx][1];

        let nextIntMin = intervals[i][0];
        let nextIntMax = intervals[i][1];

        if (nextIntMin <= currentIntMax) {
            results[idx][0] = Math.min(currentIntMin,nextIntMin);
            results[idx][1] = Math.max(currentIntMax, nextIntMax);
        } else {
            results.push(intervals[i]);
            idx++;
        }
    }
    return results;

}
