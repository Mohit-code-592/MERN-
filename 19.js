const items = ["burger","pizza","momos","coke","springroll"];
const price = [200,300,100,50,40];
const discount = [20,30,10,5,15];

const bill = (items,price,discount) => {
    let totalAmount = 0;
    for(let i = 0; i < price.length; i++) {
        let discountAmount = (price[i] * discount[i] ) / 100;
        let amountAfterDis =  price[i] - discountAmount;

        totalAmount += amountAfterDis;
    
    }

    return totalAmount;
}

let finalBill = bill(items,price,discount);
console.log(`final bill is : ${finalBill}`);
