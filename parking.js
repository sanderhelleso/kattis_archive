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
    
    let tests = parseInt(readLine());
    while(tests--) {
        
        let walk = 0;
        
        const n = parseInt(readLine());
        const stores = readLine().split(' ').map(Number).sort((a, b) => a - b);
        
        for (let i = n - 1; i >= 1; i--) {
            walk += stores[i] - stores[i - 1];
        }
        
        console.log(walk * 2);
    }
}
