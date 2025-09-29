//simple interest
let P = 5000;
let I = 5;
let T = 3;
let day = 20;

let siDay = (P * I * (day/30)) / 100;

let siMonth = (P * I * T) / 100;

let SI = siDay + siMonth;
console.log(`Simple interest is ${SI}`);

