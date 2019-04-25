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
        
    const s = readLine(' ').split(' ').map(Number);
    let p = s[0];
    const t = s[1];
      
    let nPassed = 0;
    while(p--) {
        let passed = true;
        for (let i = 0; i < t; i++) {
            let test = readLine();
            if (test !== test.toLowerCase()) {
                test.split('').forEach((c, i) => {
                    if (c !== c.toLowerCase() && i !== 0) {
                        passed = false;
                    }
                });
            }
        }
        
        if (passed) nPassed++;
    }
    
    console.log(nPassed);
}
