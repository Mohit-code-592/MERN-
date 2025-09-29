//simple interest

let P = 5000;
let I = 5;
let T = 3;
let day = 20;

let dayCalucation;
let monthName = "july";

if (monthName == "jan" || monthName == "march" || monthName == "may" || monthName == "july" || monthName == "oct" || monthName == "dec") {
    dayCalucation = 31;
}
else if (monthName == "fab") {
    dayCalucation = 28;
}
else {
    dayCalucation = 30;
}

let siDay = (P * I * (day/dayCalucation)) / 100;

let siMonth = (P * I * T) / 100;

let SI = siDay + siMonth;
console.log(`Simple interest is ${SI}`);
