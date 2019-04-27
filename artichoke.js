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

function price(k, [p, a, b, c, d]) {
    return p * (Math.sin(a * k + b) + Math.cos(c * k + d) + 2);
}

function main() { 
    
    const s = readLine().split(' ').map(Number);
    let n = s.pop();
    
    let max = -Math.pow(2, 32);
    let dif = 0;
    
    for (let i = 1; i < n + 1; i++) {
        const p = price(i, [...s]);
        dif = Math.max(dif, max - p)
        max = Math.max(max, p);
    }
    
    console.log(dif.toFixed(8));
}
