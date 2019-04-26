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
    while(n--) {
        
        let s = readLine().split('');
        let w = '';
        
        let divider = Math.sqrt(s.length);
        let j = 1;
        while(w.length !== s.length) {
            w += s.filter((c, i) => (i + j) % divider === 0).join('');
            j++;
        }
        
        console.log(w);
        
    }
}

