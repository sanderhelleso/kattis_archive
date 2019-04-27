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
        let s = readLine().split(' ').map(Number);
        s.pop(); // remove useless ending
        
        let f = s[0];
        let k = 0;
        for (let i = 1; i < s.length; i++) {
            if (s[i] > f * 2) k += s[i] - 2 * f;
            f = s[i];
        }
        
        console.log(k)
    }
}


