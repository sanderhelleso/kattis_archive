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
    let s = ins[0];
    let v1 = ins[1];
    let v2 = ins[2];
    let b1 = 0;
    let b2 = 0;
    
    // fill volum from bottle 2
    while(s >= v2) {
        if (s % v1 === 0) break;
        s -= v2;
        b2 += 1;
    }
    
    // fill volum from bottle 1
    while(s >= v1) {
        s -= v1;
        b1 += 1;
    }
    
    console.log(!s ? `${b1} ${b2}` : 'Impossible');  
}
