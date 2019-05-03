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
    
    const octal = {
        '000': '0',
        '001': '1',
        '010': '2',
        '011': '3',
        '100': '4',
        '101': '5',
        '110': '6',
        '111': '7'
    }
    
    let r = '';
    let s = readLine().split('');
    while(s.length % 3 !== 0) s.unshift('0');    
    while(s.length) r += octal[s.splice(0, 3).join('')];
    
    console.log(r);
       
}
