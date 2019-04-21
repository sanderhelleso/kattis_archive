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
    
    const cipher = {
        "A": "@",
        "B": "8",
        "C": "(",
        "D": "|)",
        "E": "3",
        "F": "#",
        "G": "6",
        "H": "[-]",
        "I": "|",
        "J": "_|",
        "K": "|<",
        "L": "1",
        "M": "[]\\/[]",
        "N": "[]\\[]",
        "O": "0",
        "P": "|D",
        "Q": "(,)",
        "R": "|Z",
        "S": "$",
        "T": "']['",
        "U": "|_|",
        "V": "\\/",
        "W": "\\/\\/",
        "X": "}{",
        "Y": "`/",
        "Z": "2"
    }
    
    const s = readLine()
    .split('').map(c => cipher[c.toUpperCase()] || c).join('');
    
    console.log(s);
    
}
