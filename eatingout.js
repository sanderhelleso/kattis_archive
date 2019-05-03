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
    
    const s = readLine().split(' ').map(Number);
    const m = s.shift();
    const total = s.reduce((a, b) => a + b);
    
    const foods = {};
    for (let i = 0; i < m; i++) {
        foods[i] = 0;
    }
            
    let curr = 0;
    for (let i = 0; i < total; i++) {
        if (curr > m - 1) curr = 0;
        
        foods[curr]++;
        if (foods[curr] >= 3) {
            return console.log('impossible');
        }
        
        curr++;
    }
    
    console.log('possible');    
}
