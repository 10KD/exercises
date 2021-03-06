'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}



function main() {
    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const expression = readLine();
        if (validBrackets(expression)) {
            console.log("YES");
        } else {
            console.log("NO");
        }
    }
}

function validBrackets(brackets) {
    let closingBracketStack = [];
    for (let i = 0; i < brackets.length; i++) {
        let bracket = brackets[i];
        if (bracket === "[") {
            closingBracketStack.push("]");
        } else if (bracket === "{") {
            closingBracketStack.push("}");
        } else if (bracket === "(") {
            closingBracketStack.push(")");
        } else {
            let closingBracket = closingBracketStack.pop();
            if (bracket != closingBracket) {
                return false;
            }
        }
    }
    return true;
}
