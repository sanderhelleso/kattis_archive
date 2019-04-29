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
    
    const parts = new Set();
    
    const s = readLine().split(' ').map(Number);
    const p = s[0]; // num parts on boat
    const n = s[1]; // num days of boating season
    
    let d = 0;
    for (let i = 0; i < n; i++) {
        const part = readLine();
        if (!parts.has(part)) {
            parts.add(part);
            d = i + 1;
        }
    }
    
    console.log(parts.size < p ? 'paradox avoided' : d);
}


