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
        
    let p = parseInt(readLine());
    while(p--) {
        const kn = readLine().split(' ').map(Number);
        console.log(`${kn[0]} ${kn[1] * (kn[1] + 3) / 2}`);
    }
         
}

