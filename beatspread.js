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
    
    let n = parseInt(readLine());
    while(n--) {
        const ins = readLine().split(' ').map(Number);
        const s = ins[0]; // sum
        const d = ins[1]; // abs diff
        
        let x = s + d;
        let a = x / 2;
        let b = a - d;
        
        if (x % 2 === 1 || a < 0 || b < 0) {
            console.log('impossible');
        } else console.log(a, b);
    }
}


