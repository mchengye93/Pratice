/*
Give available time slots of A and slots of B find the earlist available 
time for both to meet.

input:  slotsA = [[10, 50], [60, 120], [140, 210]]
        slotsB = [[0, 15], [60, 70]]
        dur = 8
output: [60, 68]

input:  slotsA = [[10, 50], [60, 120], [140, 210]]
        slotsB = [[0, 15], [60, 70]]
        dur = 12
output: []
*/

function meetingPlanner(slotsA, slotsB, dur) {

    let ia = 0;
    let ib = 0;
    
    
    //Time complexity O(N + M) space complexity O(1)
    while (ia < slotsA.length && ib < slotsB.length) {
      
      //get max of both start time
      let start = Math.max(slotsA[ia][0], slotsB[ib][0]);
      
      //get min of both start time
      let end = Math.min(slotsA[ia][1], slotsB[ib][1]);
      
      
      if (start + dur <= end) {
        return [start, start+dur];
      }
      
      // if end time of slotA is less than end timne of B move to next A time
      if (slotsA[ia][1] < slotsB[ib][1]) {
        ia++;
      } else {
        //if a end time is greater than b start time move B
        ib++;
      }
    }
    return [];




    // find time where both are available at the same and has duration of dur
    //Go through slots A and slots B and see where overlap

    //Time complexity O(N*M) Space complexity O(1)
    for (let i = 0; i < slotsA.length; i++) {
      let startA = slotsA[i][0];
      let endA = slotsA[i][1];
      
      
     //find values between slotA start and end
    // comparing slot B end time
      for (let x = 0; x < slotsB.length; x++ ){
        let startB = slotsB[x][0];
        let endB = slotsB[x][1];
        
        
        let start = Math.max(startA, startB);
        let end = Math.min(endA, endB);
        let duration = end-start;
        
        if (duration >= dur) {
            return [start,start+dur];
        }
        
      }
      
     
    }
    return [];
     
  }
  