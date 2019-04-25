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
    
    const words = {};
    const persons = {};
    
    let n = parseInt(readLine());
    while(n--) {
        const s = readLine().split(' ');
        const name = s.shift();
        
        if (persons.hasOwnProperty(name)) {
            persons[name] = new Set([...persons[name], ...s]);
        } else persons[name] = new Set(s);
        
        s.forEach(w => {
            if (words.hasOwnProperty(w)) {
                words[w]++;
            } else words[w] = 1;    
        });
    }
    
    const commons = Object.entries(words)
    .filter(k => {
        let mustBe = Object.keys(persons).length;
        for (let p in persons) {
            if (persons[p].has(k[0])) mustBe--;
        }
        
        return mustBe === 0 ? true : false;
    })
    .sort((a, b) => {
        if (a[1] === b[1]) {
            return a[0].localeCompare(b[0]);
        }
        
        return b[1] - a[1];       
    });
        
    if (!commons.length) return console.log('ALL CLEAR');
    
    commons.forEach(word => console.log(word[0]));
}

