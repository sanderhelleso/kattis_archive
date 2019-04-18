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
    
    const n = parseInt(readLine());
    
    for (let i = 0; i < n; i++) {
        const s = readLine().split('');
        const k = readLine().split('');
        
        console.log(s.join(''));
        console.log(k.join(''));
        console.log(k.map((c, i) => s[i] === c ? '.' : '*').join(''));
        console.log();
    }
}
