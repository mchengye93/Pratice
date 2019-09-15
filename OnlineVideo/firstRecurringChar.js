/*
Given a string return the first recurring character
*/

function firstRecurringChar(string) {
    //Go through string and save onto a hashMap
    //If already exist in hashMap return the character
    let charMap = {};

    for (let i = 0; i < string.length; i++) {
        let letter = string[i];
        
        if (charMap[letter]) {
            return letter;
        } else{
            charMap[letter] = 1;
        }
    }
    return -1;
}

let string = 'ABCDEGBA'
console.log(firstRecurringChar(string)) //B