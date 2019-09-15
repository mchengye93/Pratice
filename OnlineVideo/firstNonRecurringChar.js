/*
Given a string return first nonrecurring character
*/
function firstNonRecurringChar(string) {
    //Go through each letter of string and store count in hashMap
    //At the same time store letters in order of appearance in a set
    //Go through set and whichever occurance is 1 return b/c that is 1st nonrecuring char
    let setChar = [];
    let charCount = {};

    for (let i = 0; i < string.length; i++) {
        let letter = string[i];

        if (charCount[letter] === undefined) {
            charCount[letter] = 1;
            setChar.push(letter);
        } else {
            charCount[letter]++;
        }
    }

    for (let i = 0; i < setChar.length; i++) {
        let letter = setChar[i];
        if (charCount[letter] ===1 ){
            return letter;
        }
    }
    return null;
    
}