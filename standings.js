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

function makeTeam([ name, place ]) {
    return { name, place: parseInt(place) };
}

function main() {
    
    let t = parseInt(readLine());
    while(t--) {
        readLine();
                
        let teams = [];
        
        let n = parseInt(readLine());
        for (let i = 1; i < n + 1; i++) {
            teams.push(makeTeam(readLine().split(' ')));
        }
        
        teams.sort((a, b) => a.place - b.place);
                        
        let b = 0;
        for (let i = 1; i < n + 1; i++) {
            b += Math.abs(teams[i - 1].place - i); 
        }
        
        console.log(b);
    }
       
}
