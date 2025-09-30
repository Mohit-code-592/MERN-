//simple interest 

let P = 5000;
let I = 5;
let T = 3;
let day = 20;
let year = 2024;

let dayCalucation;
let monthName = "july";

if (monthName == "jan" || monthName == "march" || monthName == "may" || monthName == "july" || monthName == "oct" || monthName == "dec") {
    dayCalucation = 31;
}
else if (monthName == "fab") {

    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                dayCalucation = 29;
            }
            else {
                dayCalucation = 28;
            }
        }
        else {
            dayCalucation = 29;
        }
    }
    else {
        dayCalucation = 28;
    }

}
else {
    dayCalucation = 30;
}

let siDay = (P * I * (day / dayCalucation)) / 100;

let siMonth = (P * I * T) / 100;

let SI = siDay + siMonth;
console.log(`Simple interest is ${SI}`);
