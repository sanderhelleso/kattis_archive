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

function gcd(a, b) {
    if (a === b) return a;
    if (a > b) return gcd(a - b, b);
    return gcd(a, b - a);
}

function lcm(a, b) {
    return (a * b) / gcd(a, b); 
}

function main() {
    
    const s = readLine().split(' ').map(Number);
    console.log(lcm(s[0], s[1]) <= s[2] ? 'yes' : 'no');
}


