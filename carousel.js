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
    
    while(1 < 2) {
        const nm = readLine().split(' ').map(Number);
        let n = nm[0];
        const m = nm[1];
        if (n === 0 && m === 0) break;
        
        let bAmount = -1;
        let bTicket = 0;
        
        while(n--) {
            const ab = readLine().split(' ').map(Number);
            const a = ab[0];
            const b = ab[1];
            
            if (a <= m) {
                if ((a * bAmount == b * bTicket && a > bTicket) || bTicket === 0 || a * bAmount > b * bTicket) {
                    bTicket = a;
                    bAmount = b;
                }
            }            
        }           
        
        if (bAmount === -1) {
            console.log('No suitable tickets offered');
        } else {
            console.log(`Buy ${bTicket} tickets for $${bAmount}`)
        }
    }
}

