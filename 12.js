// 2! + 6! + 10! + 11! + 23! + 35! = ?

let sum1 = 0;
let sum2 = 0;
let fact1 = 1;
let fact2 = 1;

for(let j = 2; j <= 10; j++) {
    fact1 *= j;
    if(j % 4 == 2) {
        sum1 += fact1;
    }
}

for(let k = 1; k <= 35; k++) {
    fact2 *= k;
    if(k % 12 == 11) {
        sum2 += fact2
    }
}

let sum = sum1 + sum2;
console.log(sum);
