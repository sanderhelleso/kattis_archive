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
    
    const ins = readLine().split(' ').map(Number);
    const g = ins[0];
    const s = ins[1];
    const c = ins[2];
    
    const victory = {
        Province: { cost: 8, worth: 6 },
        Duchy: { cost: 5, worth: 3 },
        Estate: { cost: 2, worth: 1 }
    };

    const treasure = {
        Gold: { cost: 6, worth: 3 },
        Silver: { cost: 3, worth: 2},
        Copper: { cost: 0, worth: 1},
    };

    const buyingPower = (g * 3) + (s * 2) + (c * 1);

    let bestVic = '';
    let max = 0;
    for (let k in victory) {
        if (victory[k].cost <= buyingPower && victory[k].cost > max) {
            max = victory[k].cost;
            bestVic = k;
        }
    }
    
    let bestTre = '';
    max = 0;
    for (let k in treasure) {
        if (treasure[k].cost <= buyingPower && treasure[k].cost >= max) {
            max = treasure[k].cost;
            bestTre = k;
        }
    }
    
    if (bestVic && bestTre) {
        return console.log(`${bestVic} or ${bestTre}`);
    } else if (bestVic && !bestTre) {
        return console.log(`${bestVic}`);
    } else if (bestTre && !bestVic) {
        return console.log(`${bestTre}`);
    }
    
    
    console.log(buyingPower, bestVic, bestTre);
    
}
