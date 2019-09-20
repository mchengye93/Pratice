/*
Given grantsArray, return a new cap that will minimize grants affected

input:  grantsArray = [2, 100, 50, 120, 1000], newBudget = 190

output: 47 # and given this cap the new grants array would be
           # [2, 47, 47, 47, 47]. Notice that the sum of the
           # new grants is indeed 190
*/
function findGrantsCap(grantsArray, newBudget) {
 if (grantsArray === null || newBudget <=0) {
    return 0;
  }
    grantsArray.sort((a,b)=> a-b);
   let prefixSum = 0;
   console.log(grantsArray);
   for (let i = 0; i < grantsArray.length; i++) {
     let current = grantsArray[i];
     let available = newBudget- prefixSum;
     let numbersLeft = grantsArray.length-i;
     
     
     //if we exhausted our grants then we return cap
     if (current * numbersLeft > available) {
       return available/numbersLeft;
     }
     
     //keep substracting to available until we find grants that exhaust available
     prefixSum += current;
     
   }
   
  
   return grantsArray[grantsArray.length-1];
   
   
 }
 