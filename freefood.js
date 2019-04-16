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
    
    const  n = parseInt(readLine());
    
    const e = {};
    for (let i = 0; i < n; i++) {
        const s = readLine().split(' ').map(Number);
        for (let j = s[0]; j <= s[1]; j++) {
            e[j] = true;
        }
    }
    
    console.log(Object.keys(e).length);
}
