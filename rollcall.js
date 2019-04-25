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
    
    let persons = [];
    const names = {};
    
    while(1 < 2) {
        let s = readLine();
        if (!s) break;
        s = s.split(' ');
        
        persons.push({ f: s[0], l: s[1] });
        
        if (names.hasOwnProperty(s[0])) {
            names[s[0]]++;
        } else names[s[0]] = 1;
        
    }
    
    persons.sort((a, b) => `${a.l} ${a.f}`.localeCompare(`${b.l} ${b.f}`))
    .forEach(p => console.log(`${p.f} ${names[p.f] > 1 ? p.l : ''}`));
}
