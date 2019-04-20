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

function isPerfect(n) {
    let pd = [1];
    let s = Math.floor(Math.sqrt(n));
    for (let i = 2; i <= s; ++i) {
        if (n % i === 0) {
            let q = n / i;
            if (q != i) pd.push(q);
            pd.push(i);
        }
    }
    
    const sum = pd.reduce((a, b) => a + b);
    if (sum === n) console.log(`${n} perfect`);
    else if (sum <= n + 2 && sum >= n - 2) console.log(`${n} almost perfect`);
    else console.log(`${n} not perfect`);
}

function main() { 
    
    while(1 < 2) {
        let n = readLine();
        if (n = parseInt(n)) isPerfect(n);        
        else return;
    } 
}
