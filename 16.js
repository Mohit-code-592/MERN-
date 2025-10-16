//recursion
function fact(n) {
    if(n == 0 || n == 1) {
        return 1;
    }

    return n * fact(n - 1);
}

let result = fact(5);
console.log(result);

function fibonacci_fun(n){
    if(n == 0) {
        return 0;
    }
    else if(n == 1) {
        return 1;
    }

    return fibonacci_fun(n - 2) + fibonacci_fun(n - 1);
}

let fibonacci = fibonacci_fun(10);
console.log(fibonacci);




