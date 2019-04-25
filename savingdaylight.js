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

function getMins(from, to) {
    from = from.split(':').map(Number);
    to = to.split(':').map(Number);
    
    let minsFromHH = (to[0] - from[0]) * 60; // get min diffs from hours
    let mins = minsFromHH + (to[1] - from[1]); // add remaining mins to total
    
    return `${Math.floor(mins / 60)} hours ${mins % 60} minutes`;
}

function main() {
    
    while(1 < 2) {
        let date = readLine();
        if (!date) return;
        date = date.split(' ');
        
        const diff = getMins(date[3], date[4]);       
        console.log(`${date.slice(0, 3).join(' ')} ${diff}`);
    } 
}
