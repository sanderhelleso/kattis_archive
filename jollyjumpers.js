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

function isJolly(a) {
    const n = a.length;
    let found = new Set();
                
    for (let i = 0; i < n - 1; i++) {
        let d = Math.abs(a[i] - a[i + 1]); 
        if (!d || d >= n || found.has(d)) return false;
        found.add(d);
    }
    
    return true;
}

function main() {
    
    while(1 < 2) {
        let a = readLine();
        if (!a) return;        
        a = a.split(' ').map(Number);
        a.shift();
        
        console.log(isJolly(a) ? 'Jolly' : 'Not jolly');
        
    }
}
