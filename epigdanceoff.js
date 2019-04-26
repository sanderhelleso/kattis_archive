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
    
   const dimm = readLine().split(' ').map(Number);
    
    const grid = new Array(dimm[0]);
    for (let i = 0; i < dimm[0]; i++) {
        grid[i] = readLine().split('');
    }
    
    let count = 0;
    for (let i = 0; i < dimm[1]; i++) {
        let valid = true;
        for (let j = 0; j < dimm[0]; j++) {
            if (grid[j][i] === '$') valid = false; 
        }
        
        if (valid) count++;
    }
    
    console.log(count + 1);
}

