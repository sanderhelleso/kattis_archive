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

function calcWon(p) {
        
    const tot = p.won + p.lost;
    if (!tot) return '-';
    
    return (p.won / tot).toFixed(3);
}

function main() {
    
    let f = false;
        
    while(1 < 2) {
        let s = readLine();
        if (s === '0') return;
        s = s.split(' ').map(Number);
        if (f) console.log();
        
        let n = s[0]; // num players
        let k = s[1]; // num games
        
        const players = {};
        
        for (let i = 1; i < n + 1; i++) {
            players[i] = { won: 0,  lost: 0 };
        }
        
        for (let i = 0; i < ((k * n) * (n - 1)) / 2 ; i++) {
            const moves = readLine().split(' ');
            
            const p1 = moves[0];
            const p1Move = moves[1];
            
            const p2 = moves[2];
            const p2Move = moves[3];
            
            // ROCK
            if (p1Move === 'rock' && p2Move === 'paper') {
                players[p2].won++;
                players[p1].lost++;
            } else if (p2Move === 'rock' && p1Move === 'paper') {
                players[p1].won++;
                players[p2].lost++;
            }
            
            // PAPER
            if (p1Move === 'paper' && p2Move === 'scissors') {
                players[p2].won++;
                players[p1].lost++;
            } else if (p2Move === 'paper' && p1Move === 'scissors') {
                players[p1].won++;
                players[p2].lost++;
            }
            
            // SCISSORS
            if (p1Move === 'scissors' && p2Move === 'rock') {
                players[p2].won++;
                players[p1].lost++;
            } else if (p2Move === 'scissors' && p1Move === 'rock') {
                players[p1].won++;
                players[p2].lost++;
            }
        }
        
        for (let p in players) {
            console.log(calcWon(players[p]));
        } 
                
        f = true;
    }    
}
