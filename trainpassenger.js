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
    
    const lineToNums = () => readLine().split(' ').map(Number);
    
    const cn = lineToNums();
    const totCapacity = cn.shift();
    const numStations = cn.shift();
    let currCapacity = totCapacity;
    
    let ins = [];
    for (let i = 0; i < numStations; i++) {
        ins = lineToNums();
        currCapacity += ins[0];
        currCapacity -= ins[1];
        
        if (i + 1 === numStations) {
            if (currCapacity !== totCapacity || ins[1] > 0 || ins[2] > 0) {
                return console.log('impossible');
            }
        }
       
       if (currCapacity < 0 || (currCapacity > 0 && ins[2] > 0)) {
           return console.log('impossible');
       }
    }
    
    console.log('possible');
    
}
