//1 + 3 + 5 + 7 + 9
let sum = 0;
for(let i = 1; i <= 9; i +=2 ) {
    let fact = 1;
    for(let j = 1; j <= i; j++) {
        fact *= j;
        
    }
    
    sum += fact;
}

console.log(`sum is : ${sum}`);

