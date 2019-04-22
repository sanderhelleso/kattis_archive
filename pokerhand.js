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
    
    const handC = {};
    
    const hand = readLine()
    .split(' ')
    .forEach(c => {
        if (handC.hasOwnProperty(c.split('')[0])) {
            handC[c.split('')[0]]++;
        } else handC[c.split('')[0]] = 1;
    });
    
    let best = 0;
    for (let k in handC) {
        best = Math.max(best, handC[k]);
    }
    
    console.log(best);
}
