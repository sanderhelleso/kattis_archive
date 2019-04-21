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
    
    const moves = {
        'R': 'S',
        'B': 'K',
        'L': 'H',
        'RBL': 'C',
        'RLB': 'C',
        'BRL': 'C',
        'BLR': 'C',
        'LRB': 'C',
        'LBR': 'C'
    }
    
    const s = readLine().split('');
    let counter = '';
    for (let i = 0; i < s.length; i++) {
        // check cobo
        const c = s.slice(i, i + 3).join('');   
        
        if (moves.hasOwnProperty(c) && c.length === 3) {
            counter += 'C';
            i = i + 2;
        }
        else counter += moves[s[i]];
    }
    
    console.log(counter);
}
