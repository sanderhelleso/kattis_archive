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
    
    const w = parseInt(readLine());
    let n = parseInt(readLine());
    
    let sum = 0;
    
    while(n--) {
        const wl = readLine().split(' ').map(Number);
        sum += wl[0] * wl[1];
    }
    
    console.log(sum / w);
}


