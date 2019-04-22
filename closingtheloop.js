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
    
    let cases = parseInt(readLine());
    let i = 1;
    while(cases--) {
        
        // num rope segments in bag
        const s = parseInt(readLine());
        const ropes = readLine().split(' ');
        
        // fill segments
        let b = [];
        let r = [];
        
        ropes.forEach(rope => {
            rope = rope.split('');
            rope[rope.length - 1] === 'B' 
            ? b.push(parseInt(rope.slice(0, rope.length - 1).join('')))
            : r.push(parseInt(rope.slice(0, rope.length - 1).join('')))
        });
        
        if (!b.length || !r.length) console.log(`Case #${i}: 0`);
        else {
            b = b.sort((x, y) => y - x);
            r = r.sort((x, y) => y - x);
            
            let sum = 0;
            while(b.length && r.length) {
                sum += ((b.shift() - 1) + (r.shift() - 1));
            }
            
            console.log(`Case #${i}: ${sum}`);                        
        }
        
        i++;
    }
}
