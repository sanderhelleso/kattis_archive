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

function price(k, [p, a, b, c, d]) {
    return p * (Math.sin(a * k + b) + Math.cos(c * k + d) + 2);
}

function main() { 
    
    const s = readLine().split(' ').map(Number);
    const h = s[0];
    const w = s[1];
    
    const bricks = readLine().split(' ').map(Number);
    let currW = 0;
    let currH = 0;
    let finito = false;
    
    let i = 0;
    bricks.forEach(brick => {
        if (currH < h) {
            currW += brick;
            if (currW === w) {
                currH++;
                currW = 0;
            } else if (currW > w) currH += h + 1;
        }
        
        if (currH === h) finito = true;
    });
    
    console.log(finito ? 'YES' : 'NO');
}


