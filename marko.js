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
    
    
    const k = {
        '1': [],
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z']
    }
    
    const dict = [];
    const n = parseInt(readLine());
    for (let i = 0; i < n; i++) {
        dict.push(readLine().split(''));
    }
    
    let build = [];
    const seq = readLine().split('');
    dict.forEach(word => {
        let i = 0;
        let builtWord = '';
        seq.forEach(key => {
           if (k[key].includes(word[i])) {
               builtWord += word[i];
            }
            i++;
        }); 
        
        if (builtWord) build.push(builtWord);
    });
        
    let count = 0;
    dict.forEach(w => {
        if (build.includes(w.join(''))) count++; 
    });
    
    console.log(count);
}
