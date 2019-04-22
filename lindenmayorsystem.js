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
    
    const nm = readLine().split(' ').map(Number);
    const rules = {};
    
    for (let i = 0; i < nm[0]; i++) {
        const rule = readLine().split('->');
        rules[rule[0].trim()] = rule[1].trim();
    }
    
    let tree = readLine();
    while(nm[1]--) {
        tree = tree.split('').map(n => rules[n] || n).join('');    
    }
    
    console.log(tree);
}
