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
    
    const wh = readLine().split(' ').map(Number);
    const m = Math.sqrt((wh[1] * wh[1]) + (wh[2] * wh[2]));
    
    while(wh[0]--) {
        const s = parseInt(readLine());
        console.log(s > m ? 'NE' : 'DA');
    }
}

