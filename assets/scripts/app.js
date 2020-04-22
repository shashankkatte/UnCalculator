let currentResult = 0;
const defaultResult =0;

currentResult = currentResult +10;

// let calculationDescription = '('+defaultResult+'+10)';

// Or we could use a template literal, you can add line breaks here (redundant whitespaces). but in browser you'll need to style using white-space:pre
let calculationDescription = `( ${defaultResult} + 10 )`;

outputResult(currentResult, calculationDescription);