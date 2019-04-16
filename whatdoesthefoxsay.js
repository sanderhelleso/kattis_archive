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
    
    const n = parseInt(readLine());
    for (let i = 0; i < n; i++) {
        const animalToSound = {};
        const words = readLine().split(' ');
    
        let s = readLine();
        while (s) {
            s = s.split(' ');
            if (s[0] === 'what') break; 
            
            animalToSound[s[2]] = s[0]
            s = readLine();
        }
        
        const r = words.filter(w => !animalToSound.hasOwnProperty(w));
        console.log(r.join(' '));
    }
    
}
