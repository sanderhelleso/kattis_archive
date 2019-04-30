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
    
    let n = parseInt(readLine()); // the amount of kinds of the shop has    
    const teaPrices = readLine().split(' ').map(Number);
    
    let m = parseInt(readLine()); // the amount of toppings the shop has    
    let toppingPrices = readLine().split(' ').map(Number);
        
    let b = 99999;
    for (let i = 0; i < n; i++) {
        
        let s = readLine().split(' ').map(Number);
        let k  = s.shift();
                
        for (let j = 0; j < k; j++) {
            
            let c = teaPrices[i] + toppingPrices[s[j] - 1];
            if (c < b) b = c;
        }
    }
    
    let amount = parseInt(readLine());
    let canBuy = amount / b;
    console.log(parseInt(canBuy > 0 ? canBuy - 1 : 0));
}


