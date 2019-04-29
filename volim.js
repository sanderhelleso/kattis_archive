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
    
    let time = 210;
    let lastP = 8;
    
    let k = parseInt(readLine()); // start pos of box
    let n = parseInt(readLine()); // num questions asked
    
    while(n--) {
        const s = readLine().split(' ');
        const t = parseInt(s[0]);
        const a = s[1];
        
        time = time - t;
        if (time <= 0) {
            return console.log(k);
        } 
        
        if (a === 'T') k = k + 1 > lastP ? 1 : k + 1;
    }    
}


