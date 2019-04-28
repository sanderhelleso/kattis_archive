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

function makeWord() {
    
    let len = Math.floor(Math.random() * 14) + 2;
    let word = '';
    
    for (let i = 0; i < len; i++) {
        const l = Math.floor((Math.random() * 25) + 97);
        word += String.fromCharCode(l);
    }
    
    return word;
}

function makeEssay(min, max) {
    
    let essay = '';
    let wordCount = 0;
    
    const usedWords = {};
    
    while(wordCount < max) {
        
        let word = makeWord();
        while (usedWords.hasOwnProperty(word)) {
            word = makeWord();
        }
        
        essay += `${word} `;
        wordCount++;
        usedWords[word] = true;
    }
    
    return essay;
}

function main() {
    
    const s = readLine().split(' ').map(Number);
    const a = s[0];
    const b = s[1];
    
    console.log(makeEssay(a, b));
}


