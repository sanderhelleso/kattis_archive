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

const alpha= {};

function rotate(s, n) {
    
    while(n--) {
        s.forEach((c, i) => {
                    
            let ascii;
            if (c === '.') ascii = 92;
            else if (c === '_') ascii = 91;
            else ascii = c.charCodeAt(0);
                        
            ascii = ascii + 1 > 92 ? 65 : ascii + 1;
            s[i] = alpha[ascii];
        });
    }
        
    console.log(s.join(''));
}

function main() {
    
    for (let i = 65; i < 91; i++) {
        alpha[i] = String.fromCharCode(i);
    }  
    
    alpha[91] = '_';
    alpha[92] = '.';
            
    while(1 < 2) {
        let s = readLine();
        if (s === '0') break;
        
        s = s.split(' ');
        const rot = parseInt(s[0]);
        const word = s[1].split('').reverse();
        rotate(word, rot);
        
    }
}


