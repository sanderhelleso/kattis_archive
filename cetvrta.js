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
    
    const x = {};
    const y = {};
    
    for (let i = 0; i < 3; i++) {
        const points = readLine().split(' ').map(Number);
        
        if (x.hasOwnProperty([points[0]])) x[points[0]]++;
        else x[points[0]] = 1;
        
        if (y.hasOwnProperty([points[1]])) y[points[1]]++;
        else y[points[1]] = 1;
    }
    
    let out = [];
    for (let k in x) {
        if (x[k] == 1) {
            out.push(k);
        }
    }
    
    for (let k in y) {
        if (y[k] == 1) {
            out.push(k);
        }
    }
    
    console.log(out.join(' '));
}
