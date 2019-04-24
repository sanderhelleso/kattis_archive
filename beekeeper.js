'use strict';

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

function main() { 
        
    const vowels = {
        a: true, 
        e: true, 
        i: true, 
        o:true, 
        u: true, 
        y:true 
    };
    
    let wordsAndVows = {};
    
    let n = parseInt(readLine());
    while(n !== 0) {
        for (let i = 0; i < n; i++) {
            let word = readLine();
            wordsAndVows[word] = 0;
            word = word.split('');
            
            for(let j = 0; j < word.length; j++) {
                
                const pair = word.slice(j, j + 2);
                
                if ((vowels.hasOwnProperty(pair[0]) && 
                     vowels.hasOwnProperty(pair[1])) &&
                     pair.length === 2 &&
                     pair[0] === pair[1]
                   ) wordsAndVows[word.join('')]++;                    
            }
        }
        

        const result = Object.entries(wordsAndVows)
        .sort((a, b) => b[1] - a[1])
        .shift()[0];
        
        console.log(result);
        
        wordsAndVows = {};
        n = parseInt(readLine());
    }
}
