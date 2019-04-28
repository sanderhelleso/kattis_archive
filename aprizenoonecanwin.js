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
    
    const ins = readLine().split(' ').map(Number);
    const n = ins[0]; // number of items for sale
    const x = ins[1]; // minimum cost to get horn
    const items = readLine().split(' ').map(Number).sort((a, b) =>  b - a);
    
    let i = 0;
    let j = n - 1;
    while(i < j && j > 0) {
        if (items[i] + items[j] > x) i++;
        else j--;
    }
    
    console.log(n - j);
}
