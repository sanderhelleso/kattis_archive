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
    while(n--) {
        const s = readLine().split(' ').map(Number);
        const b = s[0]; // beats
        const p = s[1]; // secs
        
        const bpm = (b * 60 / p);
        const abpm = 60 / p;
        const abpmL = bpm - abpm;
        const apbmH = bpm + abpm;
        console.log(abpmL.toFixed(4), bpm.toFixed(4), apbmH.toFixed(4));
    }
         
}
