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

function fib(n) {
    let a = 1;
    let b = 0;
    let t;
    
    let aCount = 0;
    let bCount = 0;
    
    while(n >= 0) {
        t = a;
        a = a + b;
        b = t;
        n--;
    }
        
    return [a - b, b];
}

function main() {        
    
    console.log(fib(parseInt(readLine()) - 1).join(' '));
}
