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
    const n = parseInt(readLine());
    
    for (let i = 0; i < n; i++) {
        const s = readLine();
        if (s === 'P=NP') console.log('skipped');
        else console.log(s.split('+').map(Number).reduce((a, b) => a + b));
    }
}
