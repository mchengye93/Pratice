'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'match' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY prefixes
 *  2. STRING_ARRAY numbers
 */

function match(prefixes, numbers) {
   
    
    let prefixResults = [];
    //Runtime: O(N) prefixes array * O(M) numbers array
    for (let i = 0; i < numbers.length; i++) {
        let longestPrefix = '';
        let number = numbers[i];

        //Find the longest prefix for each number
        for (let x = 0; x < prefixes.length; x++) {
            let prefix = prefixes[x];
            if (number.indexOf(prefix) !== -1 && prefix.length > longestPrefix.length) {
                longestPrefix = prefix;
            }
        }
        prefixResults.push(longestPrefix);
    }
    return prefixResults;
}

function main() {