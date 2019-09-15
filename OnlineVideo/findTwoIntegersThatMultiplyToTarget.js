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
        if ( (target% num)  === 0) {
            divisibleNums[num] = num;
        }
    }
    //check to see if you can give the other divisor
    let pairs = [];
    for (let key in divisibleNums) {
        let multiple = divisibleNums[key];
        let multNum = target/multiple;

         //if found return pair
        if (divisibleNums[multNum]) {
            pairs.push([divisibleNums[key], multNum]);
        }
    }
    return pairs;

}
let arr = [1,7,8,9,4,3,10,5];
console.log(multToTarget(arr,20)); // [[4,5] , [5,4]];