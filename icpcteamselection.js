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
    
    let t = parseInt(readLine());
    while(t--) {
        const n = parseInt(readLine());
        
        let total = 0;
        const teams = readLine().split(' ').map(Number).sort((a, b) => b - a);
        for (let i = 0; i < n; i++) total += teams[i * 2 + 1];
        console.log(total);
    }
}
