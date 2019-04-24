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

function add(a, b) {
    return a + b;
}

function divide(a, b) {
    return a / b;
}

function sub(a, b) {
    return a - b;
}

function main() {    
    let n = parseInt(readLine());
    const entered = {};
    
    const anomaly = "(ANOMALY)";
    
    while(n--) {
        const status = readLine().split(' ');
        const person = status[status.length - 1];
        const action = status[0];
        
        let message = `${person} ${action === 'entry' ? 'enter' : action}ed `;
        if (entered.hasOwnProperty(person)) {
           if (entered[person] === action) {
                message += anomaly;
            } 
            
            entered[person] = action;
            
        } else {
            if (action === 'exit') {
                message += anomaly;
            }
            
            entered[person] = action;
        }
        
        console.log(message);
    }
}
