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

function sumOfDigits(n) {
    let t = 0;
    while(n > 0) {
        t += n % 10;
        n = n / 10;
    }
    
    return Math.round(t);
}

function main() {        
    
    while(1 < 2) {
        let n = parseInt(readLine());
        if (!n) return;
                
        let nSum = sumOfDigits(n);  
        let p = 11;
        while(sumOfDigits(n * p) !== nSum) p++;
        console.log(p);
    }
}

