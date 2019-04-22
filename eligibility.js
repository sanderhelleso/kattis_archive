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
        
    const isStud = (a) => parseInt(a) >= 2010; 
    const isOld = (a) => parseInt(a) >= 1991;
    
    const check = (p) => {
        if (isStud(p[1].split('/')[0])) {
            return console.log(`${p[0]} eligible`);
        }
        
        if (isOld(p[2].split('/')[0])) {
            return console.log(`${p[0]} eligible`);
        }
        
        if (parseInt(p[3]) >= 41) {
            return console.log(`${p[0]} ineligible`);
        }
        
        return console.log(`${p[0]} coach petitions`);
    }
    
    const n = parseInt(readLine());
    for (let i = 0; i < n; i++) {
        check(readLine().split(' '));
    }
}
