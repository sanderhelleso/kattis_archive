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
    
    const n = readLine();
    if (n === '0') return console.log(0);
    
    const nums = readLine().split(' ').map(Number);
    const exp = [];
    
    nums.forEach(n => {
        if (n < 0) exp.push(-n);
    });
    
    if (exp.length === 0) return console.log(0);
    
    console.log(l.reduce((a, b) => a + b));    
}
