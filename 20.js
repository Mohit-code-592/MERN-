const itemName = {
    item1 : "burger",
    item2 : "pizza",
    item3 : "coke",
    item4 : "springRoll",
    item5 : "chap"
}

const itemPrice = {
    price1 : 100,
    price2 : 300,
    price3 : 50,
    price4 : 100,
    price5 : 240
}

const itemDiscount = {
    dis1 : 25,
    dis2 : 30,
    dis3 : 35,
    dis4 : 20,
    dis5 : 40
}

let totalBill = 0;
for(let i in itemPrice) {
    totalBill += itemPrice[i];
}
console.log(totalBill);
