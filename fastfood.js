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
    
    const lineToNums = () => readLine().split(' ').map(Number);
    
    let cases = parseInt(readLine());
    while(cases--) {
        const prices = [];
        const stickers = {};
        
        const nm = lineToNums();
        const n = nm.shift(); // diff types of prices
        const m = nm.shift(); // diff types of stickers
        
        for (let i = 0; i < n; i++) {
            const s = lineToNums();
            const k = s.shift();
            const v = s.pop();
            prices.push({
                toClaim: k,
                cashValue: v,
                required: s
            });
        }
        
        const coll = lineToNums();
        for (let i = 0; i < coll.length; i++) {
            stickers[i + 1] = coll[i];
        }
        
        let totPrice = 0;
        
        for (let i = 0; i < prices.length; i++) {
            let canBuy = true;
            const r = prices[i].required;
            while(canBuy) {
                for (let j = 0; j < r.length; j++) {
                    if (stickers.hasOwnProperty(r[j])) {
                        if (stickers[r[j]] === 0) {
                            canBuy = false;
                            delete stickers[r[j]];
                            break;
                        } else if (stickers[r[j]] - 1 === 0) {
                            delete stickers[r[j]];
                        } else stickers[r[j]]--;
                    } else canBuy = false;
                }
            
                if (canBuy) totPrice += prices[i].cashValue;
            }         
        }
        
        console.log(totPrice);
    }
    
}
