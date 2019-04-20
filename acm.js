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
    
    const c = {};
    let solved = 0;
    
    while(1 < 2) {
        let s = readLine();
        if (s === '-1') break;
        
        s = s.split(' ');
        if (c.hasOwnProperty(s[1])) {
            c[s[1]].attempts.push(s[2]);
            c[s[1]].totT = parseInt(s[0]);
        } else c[s[1]] = {
            totT: parseInt(s[0]),
            attempts: [s[2]]
        }
        
        if (s[2] === 'right') solved++;
    }
    
    let score = 0;
    Object.values(c)
    .filter(({ attempts }) => attempts.includes('right'))
    .forEach(a => {
        if (a.attempts.length === 1) score += a.totT;
        else score += a.totT + ((a.attempts.length - 1) * 20)
    });
    
    console.log(solved, score);
}
