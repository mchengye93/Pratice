/*
Given phrases connect phrases where beginning matches the end of some phrases.
*/
function generate_phrases(phrases) {
    let beginning = {};
    let ending = {};

    let combination = [];
    for (let i = 0; i < phrases.length; i++) {
        let phrase = phrases[i].split(' ');
        let front = phrase[0];
        let end = phrase[phrase.length-1];
        
        //push into an array for multiple indices for beginning word
        if (beginning[front] === undefined) {
            beginning[front] = [i];
        } 

        else if (beginning[front] !== undefined) {
            beginning[front].push(i);
        }

       //push into an array for multiple indices for ending word
        if(ending[end] === undefined) {
            ending[end] = [i];
        }

        else if(ending[end] !== undefined) {
            ending[end].push(i);
        }
        
    }
        //go through each ending and see if match with begginig
      for (let key in ending) {

        //if found match connect phrases and make before and after sentence
        if (beginning[key] !== undefined) {

            //array of beginnign phrase indexes;
            let beginPhrases = beginning[key];

            for (let i = 0; i < beginPhrases.length; i++) {
                let beginPhrase = phrases[beginPhrases[i]];

                let endPhrases = ending[key];
                for (let x = 0; x < endPhrases.length; x++) {
                let endPhrase = phrases[endPhrases[x]].split(key).join(' ');
                console.log(endPhrase + beginPhrase);
                combination.push( endPhrase + beginPhrase);
                }
            }
  
        }
    }

   
    return combination;

}