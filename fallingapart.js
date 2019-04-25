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
    
    readLine();
    const nums = readLine().split(' ').map(Number).sort((a, b) => b - a);
    
    let alice = 0;
    let bob = 0;    
    nums.forEach((n, i) => i % 2 === 0 ? alice += n : bob += n);
    
    console.log(alice, bob);
    
}
