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
    
    const nums = readLine().split(' ').map(Number).sort((a, b) => a - b);
    const diff = nums[1] - nums[0];
    const max = nums[nums.length - 1];
    
    if (nums.includes(max - diff)) {
        console.log(max + diff);
    } else console.log(max - diff);    
}
