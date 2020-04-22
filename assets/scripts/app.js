let currentResult = 0;
const defaultResult = 0;

function add(num1, num2) {
    return num1 + num2;
}

currentResult = add (1, 4);

// let calculationDescription = '('+defaultResult+'+10)';

// Or we could use a template literal, you can add line breaks here (redundant whitespaces). but in browser you'll need to style using white-space:pre
let calculationDescription = `( ${defaultResult} + 10 )`;

outputResult(currentResult, calculationDescription);
