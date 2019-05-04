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
    
    const start = readLine().split(':').reduce((a, t) => (60 * a) + +t);
    const end   = readLine().split(':').reduce((a, t) => (60 * a) + +t);
    
    if (start === end) return console.log('24:00:00');
    console.log(new Date((end - start) * 1000).toISOString().substr(11, 8));
}
