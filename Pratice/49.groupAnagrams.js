/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let anagrams = {};
    
    let result = [];
    for (let i = 0; i < strs.length; i++) {
        let word = strs[i];
        let sortWord = strs[i].split('').sort().join('');
      
        if (anagrams[sortWord] === undefined) {
            anagrams[sortWord] = [word];
        } else {
            anagrams[sortWord].push(word);
        }
    }
    
    for (key in anagrams) {
        result.push(anagrams[key]);
    }
    return result;
};