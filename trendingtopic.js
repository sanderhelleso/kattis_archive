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
    
    let currDay = 0;
    const history = [];
        
    while(1 < 2) {
        let s = readLine();
        if (!s) {
            s = readLine();
            if (!s) break;
        }
        
        // new day
        if (s === '<text>') {
            s = readLine();
            
            const words = {};
            
            // collect words for the day
            while(s !== '</text>') {
                s.split(' ').forEach(word => {
                    if (word.length > 3) {
                        if (words.hasOwnProperty(word)) {
                            words[word]++;
                        } else words[word] = 1;   
                    }
                });
                
                s = readLine();
            }
                        
            // and days word and go to next day
            history[currDay] = words;
            currDay = currDay + 1 > 7 ? 0 : currDay + 1;
            s = readLine();
        }
        
        // get query
        else if (s.includes('<top ')) {
            
            const limit = parseInt(s.split('<top ')[1]);
            console.log(`<top ${limit}>`); // print query
            
            let top = {};
                        
            // sort words from last 7 days
            history.forEach(day => {
                Object.entries(day).forEach(word => {
                    if (top.hasOwnProperty(word[0])) {
                        top[word[0]] += word[1];
                    } else top[word[0]] = word[1];
                });
            });
                  
            // sort
            top = Object.entries(top)
            .sort((a, b) => 
                a[1] === b[1] 
                ? a[0].localeCompare(b[0]) 
                : b[1] - a[1]
            );
            
            // print
            top.forEach((word, i) => {
                if (i < limit || word[1] === top[limit - 1][1]) {
                    console.log(...word);
                }
            });
                        
            console.log('</top>');
        }
    }    
}


