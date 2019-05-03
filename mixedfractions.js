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
    
   while(1 < 2) {
        let s = readLine();
        if (s === '0 0') return;
       
        s = s.split(' ').map(Number);
        const a = s[0];
        const b = s[1];
       
       const mixed = `${Math.floor(a / b)} ${a % b} / ${b}`;
       console.log(mixed);
       
   }
       
}
