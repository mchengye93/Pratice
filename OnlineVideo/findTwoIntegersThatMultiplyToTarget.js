/*
Given an array on integers find the two integer that multiply to target
*/
function multToTarget(array, target) {
    //Go through array once and check if you can find pair to multiply to target
    //To speed up store process store numbers that is divisible by target
    //Then go through each and see if divisor can be found
    let divisibleNums = {};
    for (let i = 0; i < array.length; i++) {
        let num = array[i];
        console.log(num);
        if ( (target% num)  === 0) {
            divisibleNums[num] = num;
            let multiple = target/num;
            
            if(divisibleNums[multiple]) {
                return [num, multiple];
            }
        }
        
    }
   
    return -1;

}
let arr = [1,7,8,9,4,3,10,5];
console.log(multToTarget(arr,20)); // [4,5] ;