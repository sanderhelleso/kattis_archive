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
    
    let words = [];
    
    let n = parseInt(readLine());
    for (let i = 0; i < n; i++) words.push(readLine());
    
    for (let i = 0; i < n - 1; i++) {
        const s = readLine().split(' ').map(x => parseInt(x) - 1);
        
        words[s[0]] += words[s[1]];
        words[s[1]] = '';
    }
    
    console.log(words.filter(Boolean)[0]);
       
}
