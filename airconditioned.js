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

let len = 0;
let s = '';

function readLine() {
    return inputString[currentLine++];
}

function makeMinion([from, to]) {
    return { from , to };
}

function main() {

    let n = parseInt(readLine()); // num minions
    
    let minions = [];
    while(n--) {
        const minion = makeMinion(readLine().split(' ').map(Number));
        minions.push(minion);
    }
    
    minions = minions.sort((a, b) => a.to - b.to);
    
    let rooms = 1;
    let curr = minions[0];
    
    for (let i = 1; i < minions.length; i++) {
        const m = minions[i];
        if (m.from > curr.to) {
            rooms++;
            curr = m;
        }
    }
    
    console.log(rooms);
}


