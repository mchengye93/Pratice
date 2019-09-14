/* Given two arrays find pairs closes to target
*/
/*
I: Two arrays of intergets and target integer
O: Pairs closest to target
C: None
E: None
*/
/* Pseudocode
//Pair values from two arrays and find difference to target
//Save pair into an object storing difference as key and pairs as value
//Find minium key values and return value which should be a list of pairs with 
min difference to target
*/

function pairsToTarget(arr1, arr2, target) {
    let diffPairs = {};
    
    for (let i = 0; i < arr1.length; i++) {
        for (let x = 0; x < arr2.length; x++) {

            let pair = [arr1[i],arr2[x]];
            //total difference absolute value -1 and 1 is the same difference
            let difference = Math.abs(target - (arr1[i] + arr2[x]));

            if (diffPairs[difference] === undefined) {
                diffPairs[difference] = [pair];
            } else {
                diffPairs[difference].push(pair);
            }
        }
    }

    let minNum = Number.MAX_SAFE_INTEGER;
    for (var key in diffPairs) {
        let num = parseInt(key);
        if (num < minKeys) {
            minNum = num;
        }
    }
    return diffPairs[minNum];
   

}