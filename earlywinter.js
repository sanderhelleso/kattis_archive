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
    const n = s[0];
    const d = s[1];
    
    const years = readLine().split(' ').map(Number);
    for (let i = 0; i < n; i++) {
        if (years[i] <= d) {
            return console.log(`It hadn't snowed this early in ${i} years!`);
        }
    }
    
    console.log('It had never snowed this early!');
}


