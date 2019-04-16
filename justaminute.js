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
    
    let m = 0;
    let w = 0;
    for (let i = 0; i < n; i++) {
        const s = readLine().split(' ').map(Number);
        m += s[0];
        w += s[1];
    }
    
    const slm = (w / (m * 60)).toPrecision(10);
    console.log(slm <= 1 ? 'measurement error' : slm);
}
