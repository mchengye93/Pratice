
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

