/*
/*You will be given strings containing brackets of 4 types - round (), square [], curly {} and angle <> ones. The task is to check, whether brackets are in correct sequence. I.e. any opening bracket should have closing bracket of the same type somewhere further by the string, and bracket pairs should not overlap, though they could be nested:

 (a+[b*c] - {d/3})  - here square and curly brackets are nested in the round ones
 (a+[b*c) - 17]     - here square brackets overlap with round ones which does not make sense

//[ ]
//I: string
//O: boolean
*/

let correctSequence = (string) => {
    let bracket = {
        '(': ')',
        '[': ']',
        '{' : '}',
        '<' : '>'
        
    }
    
    let stack = [];
    
    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        if (char === '(' || char === '[' || char=== '{' || char === '<') {
            stack.push(bracket[char]);
        }
        
        if (char === ')' || char === ']' || char === '}' || char === '>') {
            let closing = stack.pop();
            if (closing !== char) return false;
            
        }
    }
    return true;
    
    
}
console.log(correctSequence('(a+[b*c] - {d/3})')); //true //[')', ']' ]
console.log(correctSequence('(a+[b*c) - 17]'));

