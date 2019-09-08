/*Given a collection of intervals, merge all overlapping intervals.

Example 1:

Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
Example 2:

Input: [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
NOTE: input types have been changed on April 15, 2019. Please reset to default code definition to get new method signature.*/
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    //take first interval and find any overlaps to the rest
    let newResult = [];
    for (let i = 0; i < intervals.length; i++) {
        let interval = intervals[i];
        let lower = interval[0];
        let upper = interval[1];
        let change = false;
        console.log('[currentupper,currentLower]', lower,upper);
        for (let x = i + 1; x < intervals.length; x++) {
            let nextInterval = intervals[x];
            let nextLower = nextInterval[0];
            let nextUpper = nextInterval[1];
            
            console.log('[nextlower,nextupper]', nextLower, nextUpper);
            //we are at same range so we update upper
            
            if (nextLower >= lower && nextLower <= upper) {
                
                    if (nextUpper > upper) {
                        upper = nextUpper;
                        console.log('Update upper: ', upper );
                        change = true;
                        
                    }
                    
                }
            
             if (nextUpper >= lower && nextUpper <= upper) {
                 
                if (nextLower < lower) {
                    lower = nextLower;
                    console.log('Update lower: ', lower);
                    change= true;

                }
            }
        
            }
        if (change) { i++};
         newResult.push([lower,upper]);   
        }
    return newResult;
    }
