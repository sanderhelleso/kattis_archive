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
            
    const ins = readLine().split(' ').map(Number);
    
    const bob = {
        currAge: ins.shift(),
        retireAtAge: ins.shift(),
        saveEaYear: ins.shift()
    }
    
    const alice = { 
        currAge: ins.shift(),
        saveEaYear: ins.shift() 
    }
    
    let bobN = (bob.retireAtAge - bob.currAge) * bob.saveEaYear;
    let aliceN = alice.saveEaYear + alice.currAge;
    console.log(Math.floor((bobN / aliceN) + 1));
}
