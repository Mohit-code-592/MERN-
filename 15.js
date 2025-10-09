//reverse a digit and find the sum of digit
let number = 12345;
let digit = 0;
let sum = 0;

while(number) {
    let rem = number % 10;
    sum += rem;
    number =  Math.floor(number / 10);
    digit =  (digit * 10) + rem;
}

console.log(digit);
console.log(sum);


