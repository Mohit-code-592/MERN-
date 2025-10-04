// 2! + 6! + 10! + 14!
let sum = 0;
for(let i = 2; i <= 14; i += 4) {
    let fact = 1;
    for(let j = 1; j <= i; j++) {
        fact *= j;
    }
    sum += fact;
}

console.log(sum);
