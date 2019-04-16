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
    const n =  readLine().split(' ').map(Number);
    const sum = n.reduce((a, b) => a + b);
    
    if (sum === 0) return console.log('Not a moose');
    console.log(n[0] === n[1] ? `Even ${sum}` : `Odd ${Math.max(...n) * 2}`);
}
