//sum of prime numbrs from 1 to 100 

let number = 100;
let sum = 0;

for (let num = 1; num < number; num++) {
    let isPrime = true;
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            isPrime = false;
            break;
        }
    }

    if(isPrime == true) {
        sum += num
    }
}

console.log(`sum is ${sum}`);


