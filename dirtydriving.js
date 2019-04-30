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
    
    let s = readLine().split(' ').map(Number);
    let n = s[0]; // cars in front
    let p = s[1]; // deceleration constant
    
    const dists = readLine().split(' ')
    .map(Number).sort((a, b) => a - b);
        
    let min = dists[0];
    let minDist = 0;
    dists.forEach((dist, i) => {
        
        // compare prev found min dist, to new using the: p(curr + 1) 
        minDist = Math.max(minDist, p * (i + 1) - dist + min)    
    });
    
    
    console.log(minDist);
    
    
}


