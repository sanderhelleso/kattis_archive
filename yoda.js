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

function makeTeam([ name, place ]) {
    return { name, place: parseInt(place) };
}

function main() {
    
    let a = readLine().split('').map(Number);
    let b = readLine().split('').map(Number);
        
    while(a.length !== b.length) {
        if (a.length < b.length) {
            a.unshift(0);
        } else {
            b.unshift(0);
        }
    }
        
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            b[i] = false;
        } else if (b[i] > a[i]) {
            a[i] = false;
        } else continue;
    }
    
    console.log(a, b);
    
    a = a.filter(n => n !== false);
    b = b.filter(n => n !== false);
    
    if (!a.length) {
        console.log('YODA');
    } else console.log(parseInt(a.join('')));
    
    if (!b.length) {
        console.log('YODA');
    } else console.log(parseInt(b.join('')));
       
}
