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
    
    const vowels = { 
        a: true,
        e: true,
        i: true,
        o: true,
        u: true
    };
    
    let message = readLine().split('');
    message.forEach((c, i) => {
        if (vowels.hasOwnProperty(c)) {
            message[i + 1] = false;
            message[i +  2] = false;
        }
    });  
    
    console.log(message.filter(Boolean).join(''));
}

