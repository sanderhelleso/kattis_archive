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
        
    const ins = readLine().split(' ').map(Number);
    const l = ins.shift();
    const n = ins.shift();
    let nNotAllowed = 0;
    let nCurrPPl = 0;
    
    for (let i = 0; i < n; i++) {
        const s = readLine().split(' ');
        if (s[0] === 'enter') {
            if (parseInt(s[1]) + nCurrPPl <= l) {
                nCurrPPl += parseInt(s[1])
            } else nNotAllowed++;
        } else nCurrPPl -= parseInt(s[1]); 
    }
    
    console.log(nNotAllowed);
}
