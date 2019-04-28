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
    
    let curr = '';
    let projects = {};
    let students = {};
    
    while(1 < 2) {
        let s = readLine();
        if (s === '1') {
            
            const t = Object.entries(projects)
            .map(([k, v]) => {
                return {
                    name: k,
                    studs: new Set(v.filter(stud => {
                        return Object.keys(students[stud]).length === 1;
                    }))
                }   
            })
            .sort((a, b) => {
                if (a.studs.size === b.studs.size) {
                    return a.name.localeCompare(b.name);
                } 

                return b.studs.size - a.studs.size;
            })
            .forEach(project => {
                console.log(`${project.name} ${project.studs.size}`);
            });
                
            curr = '';
            projects = {};
            students = {};
            
            s = readLine();
            if (s === '0') break;
        }
        
        if (s.toUpperCase() === s) {
            curr = s;
            projects[curr] = [];
        } else {
            projects[curr].push(s);
            
            if (students.hasOwnProperty(s)) {
                students[s][curr] = true;
            } else students[s] = { [curr]: true };
        }
    }
}

