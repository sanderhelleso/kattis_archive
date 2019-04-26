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
    
    const cards = {};    
    readLine().split('')
    .forEach(card => {
       if (cards.hasOwnProperty(card)) {
           cards[card]++;
       } else cards[card] = 1;
    });
    
    let score = 0;
    const v = Object.values(cards).sort((a, b) => b - a);
    v.forEach(card => score += card ** 2);
    
    if (v.length === 3) {
        if (v[0] === v[v.length - 1]) score += v[0] * 7;
        else score += v[v.length - 1] * 7
    }
            
    console.log(score);
         
}
