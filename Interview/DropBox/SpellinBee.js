/*
 * Complete the 'spellingBeeSolutions' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY wordlist
 *  2. STRING_ARRAY puzzles
 */

//WordList: ['APPLE', 'PLEASE', 'PLEASE']
//Puzzle: ['AELXWZ', 'AELPLXYZ']

function spellingBeeSolutions(wordlist, puzzles) {
    // Write your code here
    //For each puzzle go through each letter to see if exist on wordList
    // if valid add counter
    var result = [];

    //Go through each puzzle and check with each word
    for (var x = 0; x < puzzles.length; x++) {
        var puzzle = puzzles[x];
        var key = puzzle[0];
        var count = 0;

      
        //Compare each word with given puzzle
        for (var i = 0; i < wordlist.length; i++) {
            var word = wordlist[i];
   
            var valid = true;
            
            //check if character and key match puzzle
            if(word.indexOf(key)=== -1) {
                valid = false;
            } else {
                for (var s = 0; s < word.length; s++) {
            
                //check if match key or letter of word exist in puzzle 
                    if (puzzle.indexOf(word[s]) === -1) {
                        valid = false;
                        break;
                    }
                }
            }

            }
          
            if (valid) {
                count++;
                
            }
        }
           
            result.push(count);
    

    return result;
    

}