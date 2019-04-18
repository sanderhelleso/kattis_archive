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
    
    let n = parseInt(readLine());
    while(n-- > 0) {
        const counts = {};
        const reqs = readLine().split(' ').map(Number);
        const div = reqs.shift();
        const len = reqs.shift();
        let rem = [];
        
        const d = readLine().split(' ').map(Number);
        for (let i = 0; i < len; i++) {
            let num = d[i];
            rem[i] = (i != 0) ? (num + rem[i - 1]) % div : num % div;
            counts[rem[i]] = rem[i] === 0 ? 1 : 0;
        }
        
        let seqs = 0;
        for (let i = 0; i < len; i++) {
            seqs += counts[rem[i]]
            counts[rem[i]] = counts[rem[i]] + 1;
        }
        
        console.log(seqs);
    }
}
