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

const arr = x => Array.from(x);
const num = x => Number(x) || 0;
const str = x => String(x);
const isEmpty = xs => xs.length === 0;
const take = n => xs => xs.slice(0,n);
const drop = n => xs => xs.slice(n);
const reverse = xs => xs.slice(0).reverse();
const comp = f => g => x => f (g (x));
const not = x => !x;
const chunk = n => xs => isEmpty(xs) ? [] : [take(n)(xs), ...chunk (n) (drop (n) (xs))];

let numToWords = n => {
  
  let a = [
    '', 'one', 'two', 'three', 'four',
    'five', 'six', 'seven', 'eight', 'nine',
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
    'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
  ];
  
  let b = [
    '', '', 'twenty', 'thirty', 'forty',
    'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
  ];
  
  let g = [
    '', 'thousand', 'million', 'billion', 'trillion', 'quadrillion',
    'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion'
  ];
  
  let makeGroup = ([ones,tens,huns]) => {
    return [
        num(huns) === 0 ? '' : a[huns] + ' hundred ',
        num(ones) === 0 ? b[tens] : b[tens] && b[tens] + '-' || '',
        a[tens+ones] || a[ones]
    ].join('');
  };
  
  let thousand = (group,i) => group === '' ? group : `${group} ${g[i]}`;
  
  if (typeof n === 'number') return numToWords(String(n));
  else if (n === '0') return 'zero';
  else return comp (chunk(3)) (reverse) (arr(n))
    .map(makeGroup)
    .map(thousand)
    .filter(comp(not)(isEmpty))
    .reverse()
    .join(' ');
};

function main() { 
    
    while (1 < 2) {
        let s = readLine();
        if (!s) return;
        s = s.split(' ')
        .map(w => {
            if (!isNaN(w)) {
                w = numToWords(w)
                if (w.split('')[w.length - 1] === '-') {
                    return w.substring(0, w.length - 1);
                } return w.trim();
            } else return w.trim();
        }).join(' ');
    
        console.log(`${s.charAt(0).toUpperCase()}${s.slice(1)}`);
    }
}
