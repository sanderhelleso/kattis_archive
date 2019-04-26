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
        
    const s = readLine().split(' ');
    let row = -1;
    let col = -1;
    
    for (let i = 0; i < s[0].length; i++) {
        for (let j = 0; j < s[1].length; j++) {
            if (s[1][j] === s[0][i]) {
                row = j;
                col = i;
                break;
            }
        }
        
        if (row !== -1 && col !== -1) break;
    }
    
    for (let i = 0; i < s[1].length; i++) {
        let out = '';
        for (let j = 0; j < s[0].length; j++) {
            if (j === col) out += s[1][i];
            else if (i === row) out += s[0][j];
            else out += '.';
        }   
        
        console.log(out);
    }
         
}
