let fact = 1;
let sum = 0;

for(let i = 1; i <= 5; i++) {
    fact *= i;
    if(i % 2 != 0) {
        sum += fact;
    }
}

console.log(fact); 
console.log(`sum is : ${sum}`);
