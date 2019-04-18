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
        const s = readLine();
        if (!s) return;
        
        const li = s.split(' ').map(Number);
        for (let i = 0; i < li.length; i++) {
            let sum = 0;
            for (let j = 0; j < li.length; j++) {
                if (i !== j) sum += li[j];
            }
            
            if (li[i] == sum) {
                console.log(sum);
                break;
            }
        }
    }
}
