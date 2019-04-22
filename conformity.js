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
    
    let n = parseInt(readLine());
    const c = {};
    
    while(n--) {
        const s = readLine()
        .split(' ')
        .map(Number)
        .sort((a, b) => a - b)
        .join(' ');
        
        if (c.hasOwnProperty(s)) {
            c[s]++;
        } else c[s] = 1;
    }
        
    const ca = Object.values(c);
    let max = Math.max(...ca);
    
    // handle multiple with same popularity
    if (ca.indexOf(max) !== ca.lastIndexOf(max)) {
        const ans = ca
        .filter(n => n === max)
        .reduce((a, b) => a + b);
        
        console.log(ans);
        
    } else console.log(max);
}
