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
        const d = 360;
        let degs = d * 3; 

        let c = readLine().split(' ').map(Number);
        if (c.join('') === '0000') return;
        c = c.map(n => n * 9);
        
        degs += (c[0] - c[1] + d) % d;
        degs += (c[2] - c[1] + d) % d;
        degs += (c[2] - c[3] + d) % d;
        console.log(degs);
    }
}
