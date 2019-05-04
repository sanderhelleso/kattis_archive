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
    
    let n = parseInt(readLine());
    const friends = new Set([0, n - 1]);
    
    for (let i = 1; i < Math.sqrt(n); i++) {
        if (!(n % (i + 1))) {
            friends.add(i);
            friends.add((n / (i + 1) - 1))
        }
    }
    
    console.log(Array.from(friends).sort((a, b) => a - b).join(' '))        
}
