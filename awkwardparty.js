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
    
    const n = parseInt(readLine());
    let g = readLine().split(' ');
    let seats = {};
    
    const calcDist = (o) => {
        return o.end - o.start;
    }
    
    for (let i = 0; i < n; i++) {
        const seat = parseInt(g[i]);
        if (seats.hasOwnProperty(seat)) {
            if (seats[seat].end !== -1) { 
                if (calcDist(seats[seat]) > i - seats[seat].end) {
                    seats[seat] = { start: seats[seat].end, end: i }
                }  
            } else seats[seat].end = i;
        } else seats[seat] = { start: i, end: -1 }
    }
    
    let akw = 100001;
    for (let k in seats) {
        if (seats[k].end !== -1) {
            const c = calcDist(seats[k]);
            if (c < akw) {
                akw = c;
            }
        }
    }
    
    
    console.log(akw === 100001 ? n : akw);
}
