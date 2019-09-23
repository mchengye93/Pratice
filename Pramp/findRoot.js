/*
Given x and n find the root of given values. It must satisfy following condition |y-root(x,n)| < 0.001).
Examples:
input:  x = 7, n = 3
output: 1.913

input:  x = 9, n = 2
output: 3
*/

function root(x, n) {
    // your code goes here
    /*
    Input:  x= int, n = int 
    Output : nth root of x
    Must satisfy |y-root(x,n)| < 0.001
    
    root has to be less than x unless n is 1
    
    1.5^n = x
    1.913^3 = 7
    2^3 = 8
    
    BinarySearch O(log X)
    start = 1
    end = 7
    mid = start+end/2 
    
    if (mid^3 >= x-0.001 && mid^3 <= x+0.001) {
     return mid;
    }
    if (mid^3 < 7) {
     start = mid + .001;
    }
    else ( mid^3 > 7) {
    end = mid-.001;
    }
    
    */
    //x =7 n = 3
    
    
    let start = 1;
    let end = x;
    let mid = 0;
    
    while ( start <=end) {
           
      mid = (start+end)/2;
      
      if ((Math.pow(mid,n) >= x-0.001) && (Math.pow(mid,n) <= x+0.001)) {
        return mid.toFixed(3);
      }
      if (Math.pow(mid,n) < x) {
        start = mid;
      }else {
        end = mid;
      }
    }
    return mid.toFixed(3);
    
           
    
    
  }
  console.log(root(7,3));