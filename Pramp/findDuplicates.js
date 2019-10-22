/*
Given two sorted arrays arr1 and arr2 of passport numbers, implement a function findDuplicates
 that returns an array of all passport numbers that are both in arr1 and arr2. Note that the
  output array should be sorted in an ascending order.

Let N and M be the lengths of arr1 and arr2, respectively. Solve for two cases and analyze the
 time & space complexities of your solutions: M ≈ N - the array lengths are approximately the
  same M ≫ N - arr2 is much bigger than arr1.
*/
function findDuplicates(arr1, arr2) {
  
    //idx arr1, idxarr2
    //arr2 is greater arr1
    //arr2= [1,2,3,4,5]  arr1= [10,11]
    
    //arr2[0] < arr1[0]
    //arr2Idx++ 
    //arr2[0] === arr1[0]
    //  arr2Idx         arr1Idx++  
    
    let idx1 = 0;
    let idx2 = 0;
    
    let duplicates = [];
    
   /* [10,12,343,3,4,5,..............................111111111,.4111111111111111111] [ 2,111111111 ]
    [m][n]
    nlogM
    M = 100
    n = 2*/
    
    /*Runtime: Onlog(m) Space Complexity: O(n) */
    function binarySearch(arr,start,end, target) {
      
      while(start<=end) {
        let mid = Math.floor((start+end)/2);
        
        if (arr[mid] === target) {
          return true;
        } 
        if(arr[mid] > target) {
          end = mid - 1;
        } else {
          start = mid + 1;
        }
        
      }
      return false;
    }
    
    for (let i = 0; i < arr1.length; i++) {
      let num = arr1[i];
      
      if(binarySearch(arr2,0,arr2.length-1, num)) {
        duplicates.push(num);
      }
    }
    return duplicates;
    
   
    /*Runtime: O(m+n) Space Complexity: O(m+n) */
    /*
    while(idx2 < arr2.length && idx1 < arr1.length) {
      if(arr2[idx2] < arr1[idx1]) {
        idx2++;
      } else if (arr2[idx2] === arr1[idx1]) {
        duplicates.push(arr2[idx2]);
        idx2++;
        idx1++;
        
      } else {
        idx1++;
      }
    }
    return duplicates;
    */
  }