/*
Implement a document scanning function wordCountEngine, which receives a string 
document and returns a list of all unique words in it and their number of occurrences,
 sorted by the number of occurrences in a descending order. If two or more words have 
 the same count, they should be sorted according to their order in the original 
 sentence. Assume that all letters are in english alphabet. You function should be 
 case-insensitive, so for instance, the words “Perfect” and “perfect” should be 
 considered the same word.

The engine should strip out punctuation (even in the middle of a word) and use
 whitespaces to separate words.

Analyze the time and space complexities of your solution. Try to optimize for 
time while keeping a polynomial space complexity.

Examples:
input:  document = "Practice makes perfect. you'll only
                    get Perfect by practice. just practice!"

output: [ ["practice", "3"], ["perfect", "2"],
          ["makes", "1"], ["youll", "1"], ["only", "1"], 
          ["get", "1"], ["by", "1"], ["just", "1"] ]
*/
function wordCountEngine(document) {
    // your code goes here
    
    //I: String
    //O: array of unique words with occurence count 
    //C: Case insensitive & take out all punctuation
    
    //Split words
    //Clean word - get rid of punctuations
    //change words to lowercase
    //Count and put onto an object
    
    //Return array ordered by count and if same by order of appearance
    let words = cleanWords(document);
    
    let wordCount = {};
    for (let i = 0; i < words.length; i++) {
      if(wordCount[words[i]] === undefined) {
        wordCount[words[i]] = [1, i];
      } else {
        wordCount[words[i]][0]++;
      }
    }
    let result = [];
    
    for (let key in wordCount) {
      result.push([key,wordCount[key][0]+'', wordCount[key][1]]);
    }
    
    result.sort((a,b)=> b[1]-a[1]);
    result.sort((a,b) => )
    
    return result;
   
    
  }
  
  function cleanWords(string) {
    let words = string.toLowerCase().split(' ');
   
    
    let res = [];
    for (let i = 0; i < words.length; i++ ) {
      let word = words[i];
      if (word === '') continue;
      let cleanWord = '';
      for (let x = 0; x < word.length;x++) {
        let char = word[x];
        if (char >= 'a' && char <= 'z') {
          cleanWord += char;
        }
      }
     
      res.push(cleanWord);
      
    }
    return res;
  }
  
  