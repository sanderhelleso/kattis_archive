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
    
    readLine();
    const w = readLine().split(' ');
    
    let cMumbles = 0;
    let lastN = 0;
    
    if (isNaN(w[0])) {
        cMumbles++;
    } else lastN = parseInt(w); 
    
    if (lastN !== 1 && cMumbles === 0) {
        return console.log('something is fishy');
    }
    
    for (let i = 1; i < w.length; i++) {
        if (isNaN(w[i])) {
            cMumbles++;            
        } else {
            const n = parseInt(w[i]);
            if ((n - cMumbles !== lastN && n - (lastN + cMumbles) !== 1) || n === cMumbles + lastN) {
                return console.log('something is fishy');
            }
            
            lastN = parseInt(w[i]);
            cMumbles = 0;
        }
    }
    
    console.log('makes sense');
}
