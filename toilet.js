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

let s = [];

function first() {
    
    let n = 0;
    let curr = s[0];
    
    for (let i = 1; i < s.length; i++) {
        if (curr === 'U') {
            if (s[i] === 'D') n += 2;
        } else n++;
        
        curr = 'U';
    }
    
    return n;
}

function sec() {
    
    let n = 0;
    let curr = s[0];
    
    for (let i = 1; i < s.length; i++) {
        if (curr === 'D') {
            if (s[i] === 'U') n += 2;
        } else n++;
        
        curr = 'D';
    }
    
    return n;
}

function third() {
    
    let n = 0;
    let curr = s[0];
    
    for (let i = 1; i < s.length; i++) {
        if (curr === 'U') {
            if (s[i] === 'D') {
                n += 1;
                curr = 'D';
            }
        } else {
            if (s[i] === 'U') {
                n += 1;
                curr = 'U';
            }
        }        
    }
    
    return n;
}

function main() {
    
    s = readLine().split('');
    
    console.log(first());
    console.log(sec());
    console.log(third());
}
