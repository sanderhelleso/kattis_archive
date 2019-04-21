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
    
    const hardConsts = [98, 99, 100, 103, 107, 110, 112, 116]; // b, c, d, g, k, n, p, t
    const endings = [97, 111, 117]; // a, o, u
    
    const findNearestConst = (c) => {
        const isUpper = c === c.toUpperCase();
        if (isUpper) c = c.toLowerCase().charCodeAt(0);
        else c = c.charCodeAt(0);
        
        const s = String.fromCharCode(
            hardConsts.reduce((prev, curr) => {
                return (Math.abs(curr - c) < Math.abs(prev - c) ? curr : prev);
            })
        );
        
        return isUpper ? s.toUpperCase() : s;
    }
    
    const appendEnd = (c) => {
        c = c.charCodeAt(0);
        const end = endings.reduce((prev, curr) => {
            return (Math.abs(curr - c) < Math.abs(prev - c) ? curr : prev);
        });
        
        return `${String.fromCharCode(end)}h`;
    }
    
    const isHardConst = (c) => hardConsts.includes(c.toLowerCase().charCodeAt(0));
    
    let s = readLine().split(' ');
    s = s.map(word => {
        word = word.split('');
        
        word[0] = findNearestConst(word[0]);
        let passedFirst = false;
        
        if (word.includes('-')) {
            for (let i = 1; i < word.length; i++) {
                if (isHardConst(word[i]) && passedFirst) {
                    word[i] = word[0].toLowerCase();
                }
                
                if (word[i] === '-') {
                    passedFirst = true;
                    word[i] = '';
                }
            }           
        }
        
        if (isHardConst(word[word.length - 1])) {
            word[word.length - 1] += appendEnd(word[word.length - 1]);
        }
        
        return word.join('');
    });
    
    console.log(s.join(' ').trim());
}
