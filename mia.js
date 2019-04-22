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
    
    const calcScore = (high, low) => {
        if (low > high) {
            let temp = low;
            low = high;
            high = temp;
        }
        
        if (high == 2 && low === 1) return 100000;
        if (high === low) return high * 100;
        return high * 10 + low;
    }
    
    while(1 < 2) {
        const s = readLine().split(' ').map(Number);
        if (s[0] === 0 && s[1] === 0) return;
        
        let s1 = calcScore(s[0], s[1]);
        let s2 = calcScore(s[2], s[3]);
        
        if (s1 === s2) console.log('Tie.');
        else if (s1 > s2) console.log('Player 1 wins.');
        else console.log('Player 2 wins.');
    }
}
