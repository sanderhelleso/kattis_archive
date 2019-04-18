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
            
    const d = [];
    while (d.length < 9) d.push(parseInt(readLine()));
    const sum = d.reduce((a, b) => a + b);
    
    for (let i = 0; i < d.length - 1; i++) {
        for (let j = 0; j < d.length; j++) {
            if (d[i] !== d[j]) {
                 if ((sum - (d[i] + d[j])) === 100) {
                    return d.
                    filter(n => n !== d[i] && n !== d[j])
                    .forEach(n => console.log(n));
                }
            }
        }
    }
}
