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
        
    const line = () => readLine().split(' ').map(Number);
    let q = line().pop();
    
    const comps = {};
    line().forEach((n, i) => comps[i + 1] = n);
    
    while(q--) {
        const query = line();
        if (query[0] === 1) {
            comps[query[1]] = query[2];
        } else {
            console.log(Math.abs(comps[query[2]] - comps[query[1]]));
        }
    } 
}

