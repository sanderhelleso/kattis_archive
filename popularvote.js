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
    
    const cases = parseInt(readLine());
    
    let cands = [];
    
    for (let i = 0; i < cases; i++) {
        const nCands = parseInt(readLine());
        
        for (let j = 0; j < nCands; j++) {
            cands.push(parseInt(readLine()));
        }
        
        const w = Math.max(...cands);
        if (cands.indexOf(w) !== cands.lastIndexOf(w)) {
            console.log('no winner');
        } else {
            const total = cands.reduce((a, b) => a + b);
            if (w > total / 2) {
                console.log(`majority winner ${cands.indexOf(w) + 1}`);
            } else {
                console.log(`minority winner ${cands.indexOf(w) + 1}`);
            }
            
        }
        
        cands = [];        
    }
}
