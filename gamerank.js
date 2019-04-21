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
    
    const story = readLine().split('');
    let rank = 25;
    let stars = 0;
    let streak = 0;
        
    const tier = n => {        
        if (n >= 21 && n <= 25) {
            return 2;
        } else if (n >= 16 && n <= 20) {
            return 3;
        } else if (n >= 11 && n <= 15) {
            return 4;
        } else return 5;
    }
    
    const advance = () => {
        if (stars === tier(rank) + 1) {
            rank--;
            stars = 1;
        }
    }
    
    const lose = () => {
        streak = 0;
        if (rank <= 20) {
            stars--;
        }
        
        if (stars < 0) {
            if (rank == 20) stars = 0;
            else {
                rank++;
                stars = tier(rank) - 1;
            }
        }
    }
    
    const win = () => {
        streak++;
        let gotBonus = false;
                
        // winstreak case
        if (rank >= 6 && streak >= 3) {
            stars++;
            advance();
        } 
        
        // regular case
        stars++;
        advance();
    }
    
    for (let i = 0; i < story.length; i++) {
        if (rank > 0) {
            if (story[i] === 'W') win();
            else lose();
        }
    }
    
    console.log(!rank ? 'Legend' : rank);
}
