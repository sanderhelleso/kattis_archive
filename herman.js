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
    
    const r = parseInt(readLine());
    const c = Math.PI * r * r;
    const s = (r + r) * (r + r) / 2;
    
    console.log(c);
    console.log(s);
}
