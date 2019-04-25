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
    
    const costumes = {};
    
    let n = parseInt(readLine());
    while(n--) {
        const costume = readLine();
        if (costumes.hasOwnProperty(costume)) {
            costumes[costume]++;
        } else costumes[costume] = 1;
    }
    
    const c = Object.entries(costumes).sort((a, b) => a[1] - b[1]);
    
    let winners = [c[0][0]];
    let prev = c[0][1];
    for (let i = 1; i < c.length; i++) {
        if (c[i][1] > prev) break;
        else {
            winners.push(c[i][0]);
            prev = c[i][1];
        }
    }
    
    winners.sort((a, b) => a.localeCompare(b)).forEach(p => console.log(p));
}

