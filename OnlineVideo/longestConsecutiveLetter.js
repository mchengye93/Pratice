/*
Given a string return the longest consecutive letter
*/

function longestConsecutiveLetter(string) {
    //Go through each letter and find longest consecutive letter
    let maxCount = Number.MIN_SAFE_INTEGER;
    let maxLetter = '';
    let prevLetter = string[0];
    let currentCount = 1;
    for (let i = 1; i < string.length; i++) {
        let letter = string[i];
      
        if (prevLetter === letter) {
            currentCount++;
            if (currentCount > maxCount) {
                maxCount = currentCount;
                maxLetter = letter;
               
            }
        } else {
            prevLetter = letter;
            currentCount = 1;
        }

    }
   
    return maxLetter + ' : '+ maxCount;
}
let string = 'AABCDDBBBEA';
console.log(longestConsecutiveLetter(string));