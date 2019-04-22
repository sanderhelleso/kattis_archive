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
    const prices = readLine().split(' ').map(Number);
    
    let sum = 0;
    const discounts = prices.sort((a, b) => b - a);
    for (let i = 2; i < n; i += 3) sum += discounts[i];
    
    console.log(sum);
}
