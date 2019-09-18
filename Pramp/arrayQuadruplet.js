/*
Given an unsorted array of integers arr and a number s, write a function 
findArrayQuadruplet that finds four numbers (quadruplet) in arr that sum up to s.
 Your function should return an array of these numbers in an ascending order. If 
 such a quadruplet doesn’t exist, return an empty array.

 input:  arr = [2, 7, 4, 0, 9, 5, 1, 3], s = 20

output: [0, 4, 7, 9] # The ordered quadruplet of (7, 4, 0, 9)
                     # whose sum is 20. Notice that there
                     # are two other quadruplets whose sum is 20:
                     # (7, 9, 1, 3) and (2, 4, 9, 5), but again you’re
                     # asked to return the just one quadruplet (in an
                     # ascending order)
*/
function findArrayQuadruplet(arr, s) {
    //arr sorted
    // look at 4 elements at a time
    // if they add up to s return the quadruplets
        //if the sum passes s , stop and return []
    arr.sort((a,b)=> b-a);
    
    //[2, 7, 4, 0, 9, 5, 1, 3]
    //[0, 1 ,2, 3, 4, 5 ,7, 9] //20
    
    //I will start with the smallest num
    for (let i = arr.length-1; i >=0 ; i--) {
      let num1 = arr[i];
      for (let x = i-1; x >=0; x--) {
        let num2 = arr[x];
        if (num1 + num2 > s) break;
    
        for (let j = x -1 ; j >=0; j--) {
          let num3 = arr[j];
          if ((num1 + num2 + num3) > s) break;
          for (let z = j-1; z >=0 ;z--) {
            let num4 = arr[z];
            let sum = num4+num3+num2+num1;
            if (sum === s) {
              return [num4,num3,num2,num1].sort();
            }
          }
        }
        
      }
    }
    return [];
    
  }
  let s = 20;
  let arr = [0, 1 ,2, 3, 4, 5 ,7, 9];
  
  console.log(findArrayQuadruplet(arr,s));
  