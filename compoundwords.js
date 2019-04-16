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
    
    while (1 < 2) {
        const s = readLine();
        if (!s) break;
        
        words.push(...s.split(' '));
    }
    
    const c = [];
    
    for (let i = 0; i < words.length; i++) {
        for (let j = 1; j < words.length; j++) {
            if (words[i] !== words[j]) {
                const a = words[i] + words[j];
                const b = words[j] + words[i];
                if (!c.includes(a)) c.push(a);
                if (!c.includes(b)) c.push(b);
            }
        }
    }
    
    c.sort((a, b) => a.localeCompare(b)).forEach(w => console.log(w));
}
