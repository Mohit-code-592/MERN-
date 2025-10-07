//3! + 8! + 13! == ?
let sum = 0;
let fact = 1;

for(let i = 1; i <= 13; i++) {
    fact *= i;
    if(i % 5 == 3) {
        sum += fact;
    }
}

console.log(sum)
