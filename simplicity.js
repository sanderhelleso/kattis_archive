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

function count(s) {
    return s.reduce((a, c) => { a[c]++ ? 0 : a[c] = 1; return a }, {})    
}

function main() {

    let s = readLine().split('');
    const c = count(s);
    const keys = Object.keys(c).sort((a, b) => c[a] - c[b]);
    
    let simp = Object.keys(keys).length  
    if (simp <= 2) return console.log(0);
    
    let n = 0;
    keys.forEach(k => {
        if (simp > 2) {
            for (let j = 0; j < c[k]; j++) n++; 
            simp--;
        }
    });   
    
    console.log(n);
}


