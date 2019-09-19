/*
Given grantsArray, return a new cap that will minimize grants affected

input:  grantsArray = [2, 100, 50, 120, 1000], newBudget = 190

output: 47 # and given this cap the new grants array would be
           # [2, 47, 47, 47, 47]. Notice that the sum of the
           # new grants is indeed 190
*/
function findGrantsCap(grantsArray, newBudget) {
    // your code goes here
    
    
    //find average cap for given grants
    let average = newBudget/grantsArray.length;
    let totalAvgLess = 0;
    let totalCountLess = 0;
    
    for (let i = 0; i < grantsArray.length; i++) {
     //then find those that are less than the average
    //count and add those that are less than average 
      let budget = grantsArray[i];
      if (budget < average) {
        totalAvgLess += budget;
        totalCountLess++;
      }
    
    }
   
    //subtract to to total budget and then divide amongs greater granta
    let cap = (newBudget-totalAvgLess)/ (grantsArray.length-totalCountLess); 
    
    //check if newCap has value less than it
    
    return cap;
    
    
  } 