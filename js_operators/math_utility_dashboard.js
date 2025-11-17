let x = 16.75;

let roundedValue = Math.round(x);
let squareRoot = Math.sqrt(x);
let powValue = Math.pow(x, 3);
let randomValue = Math.floor(Math.random() * 41) + 10;

let output =
"Rounded: " + roundedValue +
"\nSquare Root: " + squareRoot +
"\nPower (x^3): " + powValue +
"\nRandom (10–50): " + randomValue;

console.log(output);