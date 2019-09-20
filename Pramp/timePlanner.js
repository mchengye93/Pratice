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
    // find time where both are available at the same and has duration of dur
    
  
    //Go through slots A and slots B and see where overlap
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
  