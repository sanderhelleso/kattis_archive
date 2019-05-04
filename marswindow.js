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
    
    const year = parseInt(readLine());
    
    let y = 2018;
    let m = 3;
    
    while(y < year) {
        m += 26;
        
        while(m >= 12) {
            m -= 12;
            y += 1;
        }
    }
    
    console.log(y === year ? 'yes' : 'no');
}
