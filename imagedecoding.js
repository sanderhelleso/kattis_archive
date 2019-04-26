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
    
    let first = true;
    while(1 < 2) {
        let n = parseInt(readLine());
        if (!n) return;
        if (!first) console.log();
       
        let linelengths = new Set();
        while(n--) {
            let out = '';
            let ins = readLine().split(' ');
            let sign = ins.shift() === '#';
           
            ins = ins.map(Number);
            linelengths.add(ins.reduce((a, b) => a + b));
           
            ins.forEach(n => {
                let s = sign ? '#' : '.';
                out += s.repeat(n);
        
                sign = !sign;
            }); 
           
            console.log(out);
        }
       
        if (linelengths.size > 1) console.log('Error decoding image');
        first = false;
    }
}

