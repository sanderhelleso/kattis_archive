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
    
    readLine();
    const b = readLine().split(' ').map(Number).sort((a, b) => a - b);
    
    let start =  b[0];
    let currG = start;
    const groups = { [start]: [] };
    
    for (let i = 1; i < b.length; i++) {
        
        if (b[i] - start === 1) {
            if (!groups.hasOwnProperty(currG)) {
                groups[currG] = [b[i]];
            } else groups[currG].push(b[i]);
            
        } else {
            currG = b[i];
            groups[currG] = [];
        }
        
        start = b[i];
    }
        
    let output = '';
    Object.entries(groups).map(([k, v]) => {
        if (v.length === 1) {
            output += `${k} ${v.join(' ')} `;
        } else if (v.length > 1) {
            output += `${k}-${v[v.length - 1]} `;
        } else output += `${k} `;
    });
        
    console.log(output);
}
