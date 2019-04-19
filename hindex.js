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
    
    let n = parseInt(readLine());
    let c = [];
    while(n--) {
        c.push(parseInt(readLine()));
    }
    
    c = c.sort((a, b) => b - a);
    let h = 0;
    while(h < c.length && h + 1 <= c[h]) h++
    console.log(h)
}
