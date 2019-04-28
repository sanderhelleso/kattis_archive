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

function makeSwap(a, b) {
    
    const memo = {};
    
    b.forEach((c, i) => {
        memo[i] = c;    
    });
    
    a.forEach((c, i) => {
       b[i] = memo[a[i]];    
    });
    
    return doSwap(b);
}

function main() {
    
    let t = parseInt(readLine());
    let c = 1;
    while(t--) {
        const a = readLine().split('');
        const b = readLine().split('');
        
        let diff = 0;
        let oneDiff = 0;
        let ones = 0;
        let zeros = 0;
        
        a.forEach((c, i) => {
            
            // get single difs
            if (a[i] !== b[i]) diff++;
            if (a[i] === '?' && b[i] === '1') oneDiff--;
            
            // get multi diffs
            else if (a[i] === '0' && b[i] === '1') {
                zeros++;
                oneDiff--;
            } else if (a[i] === '1' && b[i] === '0') {
                ones++;
                oneDiff++;
            }
        });
        
        if (oneDiff > 0)console.log(`Case ${c}: ${-1}`);
        else console.log(`Case ${c}: ${diff - Math.min(ones, zeros)}`);
            
        c++
    }
    
}


