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
        let k = parseInt(readLine());
        let a = 0;
        
        while(k > 0) {
           a += 0.5;
           a *= 2;
           k--;
        }
        
        console.log(a)
    }
}
