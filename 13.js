//fibonacci series
let number = 10;
let first = 0;
let second = 1;

for(let i = 3; i <= number; i++) {
    let third = first + second;
    first = second;
    second = third;
}

console.log(second)
