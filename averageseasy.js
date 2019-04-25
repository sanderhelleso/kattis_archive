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

function sum(a) {
    if (a.length === 0) return 0;
    
    let s = 0;
    for (let i = 0; i < a.length; i++) {
        s += a[i];
    }
    
    return s / a.length;
}

function main() {
    
    const calcAvgDiffs = (c, e) => {
        let cAvg = sum(c);
        let eAvg = sum(e);
        
        return { cAvg, eAvg };
    };
    
    let n = parseInt(readLine());
    while(n--) {
        readLine();
        let nCE = readLine().split(' ').map(Number);
        
        let nc = nCE[0]; // number of CS students
        let ne = nCE[1]; // number of Ecom students
                 
        const cIqs = readLine().split(' ').map(Number);
        const eIqs = readLine().split(' ').map(Number);
                
        const avgs = calcAvgDiffs(cIqs, eIqs);
        let cAvg = avgs.cAvg;
        let eAvg = avgs.eAvg;
        
        let count = 0;
        for (let i = 0; i < nc; i++) {
            if (cIqs[i] < cAvg && cIqs[i] > eAvg) count++;
        }
        
        console.log(count);
    }
}
