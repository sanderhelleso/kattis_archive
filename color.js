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
    const s = ins[0]; // number of socks
    const c = ins[1]; // capacity of machine
    const k = ins[2]; // max abs diff of socks allowed
    
    const socks = readLine().split(' ').map(Number).sort((a, b) => a - b);
    
    
    let first = socks[0];
    let count = 1;
    let m = 1;
    
    for (let i = 1; i < s; i++) {
        
        if (count === c || socks[i] - first > k) {
            count = 0;
            m++;
            first = socks[i];
        }
          
        count++;
    }
    
    console.log(m);
}


