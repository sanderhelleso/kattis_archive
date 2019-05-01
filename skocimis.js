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
    let a = s[0];
    let b = s[1];
    let c = s[2];
    
    if (b - a > c - b) console.log((b - a) - 1);
    else console.log((c - b) - 1);    
}


