

function vanity(codes, numbers) {
    let numToLetter = {
        2 : 'ABC',
        3: 'DEF',
        4: 'GHI',
        5: 'JKL',
        6: 'MNO',
        7: 'PQRS',
        8: 'TUV',
        9: 'WXYZ',

    }

    let codeNums = [];

    //Runtime O(N) codes array * O(M) letters of each code 
    for (let i = 0 ; i < codes.length; i++) {
        let code = codes[i];
       
        let num = '';
        //Find number associated to each code
        for (let x = 0; x < code.length; x++) {
            let letter = code[x];
            //Find number associate to each letter
            for (let key in numToLetter) {
                if (numToLetter[key].indexOf(letter) !== -1) {
                    num += key;
                    //once found stop looking for num
                    break;
                }
            }
        }

        codeNums.push(num);
    }
   
    let results = [];

    //Runtime: O(N) codeNums array * O(M) numbers array 
    for (let i = 0; i < codeNums.length; i++) {
        let codeNum = codeNums[i];
        //For each code number find phone number associated
        for (let x = 0; x < numbers.length; x++) {
            
            let number = numbers[x];

            //If found number with code push onto array
            if (number.indexOf(codeNum) !== -1) {
                //Ignore repeated numbers
                if (results.indexOf(number) === -1) {
                    results.push(number);
                    
                }
                
                
            }
        }
    }
    //Sort result 
    return results.sort((a,b)=> a-b);

}

