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

    const domJudges = {};
    const kattisJudges = {};
    
    for (let i = 0; i < n; i++) {
        const judge = readLine();
        if (domJudges.hasOwnProperty(judge)) {
            domJudges[judge]++;
        } else domJudges[judge] = 1;
    }
        
    for (let i = 0; i < n; i++) {
        const judge = readLine();
        if (kattisJudges.hasOwnProperty(judge)) {
            kattisJudges[judge]++;
        } else kattisJudges[judge] = 1;
    }
    
    let consistent = 0;   
    for (let judge in kattisJudges) {
        if (domJudges.hasOwnProperty(judge)) {
            consistent += Math.min(domJudges[judge], kattisJudges[judge]);
        }
    }
    
    console.log(consistent);
}
