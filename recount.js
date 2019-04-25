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
    
    const cands = {};
    
    while(1 < 2) {
        let s = readLine();
        if (s === '***') break;
        
        if (cands.hasOwnProperty(s)) {
            cands[s]++;
        } else cands[s] = 1;
    }
    
    const cv = Object.values(cands);
    const max = Math.max(...cv);
    
    if (cv.indexOf(max) !== cv.lastIndexOf(max)) {
        return console.log('Runoff!');
    } 
    
    Object.entries(cands)
    .forEach(([k, v]) => v === max ? console.log(k) : null);
    
}
