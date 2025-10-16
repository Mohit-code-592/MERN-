//Arrow function

const fact_fun = function(n) {
    fact = 1;
    for(let i = 1; i <= n; i++) {
        fact *= i;
    }

    return fact;
}

console.log(fact_fun(5));

const fibonacci_fun = (n) => {
    let first = 0;
    let second = 1;
    for(let i = 3; i <= n; i++) {
        let third = first + second;
        first = second;
        second = third;
    }

    return second;
}

console.log(fibonacci_fun(10));


 
