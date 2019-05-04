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
    
    /*A piece of wood of size s takes s time units to cut, 
    and Yraglac can only cut a single piece of wood at a time. 
    To maximize customer happiness, Yraglac would like to minimize
    the average total time a customer has to wait to have all 
    of their wood pieces cut. */
    
    let t = parseInt(readLine());
    while(t--) {
        let n = parseInt(readLine()); // num customers
        
        let avgs = [];
        
        for (let i = 0; i < n; i++) {
            
            // sizes of the wood pieces for the current customer
            const pieces = readLine().split(' ').map(Number);
            let nPieces = pieces.shift();
            
            if (pieces.length === 1) avgs.push(pieces[0]);
            else {
                avgs.push(pieces.reduce((a, b) => a + b));
            }
        } 
        
        let tot = 0;
        let sum = 0;
        
        avgs.sort((a, b) => a - b)
        .forEach(p => {
            tot += p;
            sum += tot;
        });
        
        console.log((sum / avgs.length).toFixed(7));
        
    }
    
}
