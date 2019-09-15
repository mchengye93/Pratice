/*
Given a string return the longest consecutive letter
*/

function longestConsecutiveLetter(string) {
    //Go through each letter and find longest consecutive letter
    let maxCount = Number.MIN_SAFE_INTEGER;
    let maxLetter = '';
    let currentLetter = string[0];
    let currentCount = 1;
    for (let i = 0; i < string.length; i++) {
        let letter = string[i];
        
        if (currentLetter === letter) {
            currentCount++;
            if (currentCount > maxCount) {
                maxCount = currentCount;
                maxLetter = letter;
            }
        } else {
            currentLetter = letter;
            currentCount = 1;
        }

    }
    return maxLetter + ' : '+ maxCount;
}