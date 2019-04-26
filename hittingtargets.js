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

function makeRect([x1, x2, y1, y2]) {
    return { x1, x2, y1, y2 };
}

function makeCircle([x, y, r]) {
    return { x, y , r };
}

function makePair([x, y]) {
    return { x, y };
}

function checkCircle(pair, circle) {
    const dist = Math.sqrt((pair.x - circle.x) ** 2 + (pair.y - circle.y) ** 2);
    return dist <= circle.r;
}

function checkRect(pair, rect) {
    const pair1 = makePair([pair.x - rect.x1, pair.y - rect.x2]);
    const pair2 = makePair([pair.x - rect.y1, pair.y - rect.y2]);
    
    let validP1 = pair1.x >= 0 && pair1.y >= 0;
    let validP2 = pair2.x <= 0 && pair2.y <= 0;
    
    return validP1 && validP2;
}

function main() {  
    
    const circles = [];
    const rects = [];

    let t = parseInt(readLine());
    while(t--) {
        let s = readLine().split(' ');
        const a = s.shift();
        s = s.map(Number);
        
        if (a === 'rectangle') {
            rects.push(makeRect(s))
        } else {
            circles.push(makeCircle(s));
        }
    }
    
    const pairs = [];
    let n = parseInt(readLine());
    for (let i = 0; i < n; i++) {
        pairs.push(makePair(readLine().split(' ').map(Number)));
    }
    
    const results = new Array(n).fill(0);
    
    pairs.forEach((pair, i) => {
        circles.forEach(circle => {
            if (checkCircle(pair, circle)) {
                results[i]++;
            }   
        });  
        
        rects.forEach(rect => {
            if (checkRect(pair, rect)) {
                results[i]++;
            }
        });
    });
        
    results.forEach(r => console.log(r));
    
}
