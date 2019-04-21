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
    
    
    let currDir = parseInt(readLine());
    let corrDir = parseInt(readLine());
    
    const clock = () => {
        let currC = currDir;
        let dist = 0;
        while(currC !== corrDir) {
            dist++;
            currC++;
            if (currC === 360) currC = 0;
        }
        
        return dist;
    }
    
    const counter = () => {
        let currC = currDir;
        let dist = 0;
        while(currC !== corrDir) {
            dist++;
            currC--;
            if (currC === -1) currC = 359;
        }
        
        return dist;
    }
    
    const clockwise = clock();
    const counterwise = counter();
    
    console.log(counterwise < clockwise ? `-${counterwise}` : clockwise);
}
