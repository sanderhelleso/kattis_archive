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
    
    const n = s[0]; // serves a player will perform in a row before it is the other
    const p = s[1]; // Pauls current score
    const q = s[2]; // Opponents current score
    
    console.log(parseInt((p + q) / n % 2) === 0 ? 'paul' : 'opponent');
}


