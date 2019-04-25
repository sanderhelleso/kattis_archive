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
    
    let word = readLine().split('');
    let myWord = new Array(word.length);
    let guessed = readLine().split('');
    let lifes = 10;
        
    for (let i = 0; i < guessed.length; i++) {
        if (!word.includes(guessed[i])) {
            if (!--lifes) return console.log('LOSE');
        }
        
        word.forEach((c, j) => word[j] === guessed[i] ? myWord[j] = guessed[i] : null);
        if (myWord.join('') === word.join('') && lifes > 0) return console.log('WIN');
    }    
}

