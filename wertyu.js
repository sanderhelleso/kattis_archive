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
    
    const keys = {
        'W': 'Q',
        'E': 'W',
        'R': 'E',
        'T': 'R',
        'Y': 'T',
        'U': 'Y',
        'I': 'U',
        'O': 'I',
        'P': 'O',
        '[': 'P',
        ']': '[',
        '\\': ']',
        
        'S': 'A',
        'D': 'S',
        'F': 'D',
        'G': 'F',
        'H': 'G',
        'J': 'H',
        'K': 'J',
        'L': 'K',
        ';': 'L',
        "\'": ';',
        
        'X': 'Z',
        'C': 'X',
        'V': 'C',
        'B': 'V',
        'N': 'B',
        'M': 'N',
        ',': 'M',
        '.': ',',
        '/': '.',
        ' ': ' ',
        
        '1': '1',
        '2': '1',
        '3': '2',
        '4': '3',
        '5': '4',
        '6': '5',
        '7': '6',
        '8': '7',
        '9': '8',
        '0': '9',
        '-': '0',
        '=': '-'
    }
    
    while(1 < 2) {
        const s = readLine();
        if (!s) return;
        
        console.log(s.split('').map(c => return keys[c]).join(''));
    }
}
