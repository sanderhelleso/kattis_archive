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

function sumOfDigit(n) {
    let t = 0;
    while(n > 0) {
        t += Math.floor(n % 10);
        n = Math.floor(n / 10);
    }
    
    return Math.floor(t);
}


function main() {
        
    let l = parseInt(readLine());
    let d = parseInt(readLine());
    let x = parseInt(readLine());
    
    let n = l;
    let m = d;
    
    while(l <= n && n <= d && sumOfDigit(n) !== x) n++;
    while(l <= m && m <= d && sumOfDigit(m) !== x) m--;

    console.log(n);
    console.log(m);
    
}
