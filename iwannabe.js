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

function makePoke([a, d, h]) {
    return { a, d, h };
}

function main() {
    
    const s = readLine().split(' ').map(Number);
    let n = s[0]; // Number of pokemons Bash have
    let k = s[1]; // Number of best pokemons to select
    
    const pokemons = new Set();
    const stats = new Map();
    
    // get top 'k' wth best of ea stat and add to set
    while(n--) stats.set(n, makePoke(readLine().split(' ').map(Number)));    
    const a = Array.from(stats).sort((a, b) => b[1].a - a[1].a).map(p => p[0]);
    const d = Array.from(stats).sort((a, b) => b[1].d - a[1].d).map(p => p[0]);
    const h = Array.from(stats).sort((a, b) => b[1].h - a[1].h).map(p => p[0]);
        
    for (let i = 0; i < k; i++) {
        pokemons.add(a[i]);
        pokemons.add(d[i]);
        pokemons.add(h[i]);
    }
    
    console.log(pokemons.size)
}


