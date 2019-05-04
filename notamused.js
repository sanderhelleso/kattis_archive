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
    
    let f = false;
    let day = 1;
    
    while(1 < 2) {
        let s = readLine();
        if (!s) return;
        if (f) console.log();
        f = true;
        
        if (s === 'OPEN') {

            const customers = {};
            
            s = readLine();
            while(s !== 'CLOSE') {
                const cust = s.split(' ');
                if (cust[0] === 'ENTER') {
                    
                   if (customers.hasOwnProperty(cust[1])) {
                      customers[cust[1]] = { 
                          ...customers[cust[1]],
                          entered: parseInt(cust[2]), 
                      };
                       
                   } else {
                      customers[cust[1]] = { 
                          entered: parseInt(cust[2]), 
                          amount: 0 
                      };    
                   }
                    
                } else {
                    const amount = (cust[2] - customers[cust[1]].entered) / 10;
                    customers[cust[1]] = {
                        amount: customers[cust[1]].amount ? amount + customers[cust[1]].amount : amount,
                        entered: 0
                    }
                }
                
                s = readLine();
            }
            
            console.log(`Day ${day++}`);
            Object.keys(customers).sort((a, b) => a.localeCompare(b))
            .forEach(cust => {
                console.log(`${cust} $${(customers[cust].amount).toFixed(2)}`);
            });            
        }
    }
    
}
