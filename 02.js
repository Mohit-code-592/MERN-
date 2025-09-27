// discount calulation on products 

let item1 = "burger";
let item1Price = 100;
let item1Discount = 10;
let item1TotalPrice = item1Price - ((item1Price * item1Discount) / 100);

let item2 = "momos";
let item2Price = 120;
let item2Discount = 20;
let item2TotalPrice = item2Price - ((item2Price * item2Discount) / 100);

let item3 = "coke";
let item3Price = 100;
let item3Discount = 15;
let item3TotalPrice = item3Price - ((item3Price * item3Discount) / 100);

let item4 = "pizza";
let item4Price = 300;
let item4Discount = 30;
let item4TotalPrice = item4Price - ((item4Price * item4Discount) / 100);

let item5 = "springroll";
let item5Price = 200;
let item5Discount = 25;
let item5TotalPrice = item5Price - ((item5Price * item5Discount) / 100);

let discount = 15;
let totalBill = item1TotalPrice + item2TotalPrice + item3TotalPrice + item4TotalPrice + item5TotalPrice;

let finalBill = totalBill - ((totalBill * discount) / 100);

console.log(`Final bill after discount is : ${finalBill}`);

coupon ="mohit@123";
userCoupon = "mohit@123";

if(coupon == userCoupon){
    let couponDiscount = 25;
    finalBill = finalBill - ((finalBill * couponDiscount) / 100);

    console.log(`Your final bill after coupon discount is : ${finalBill}`)
}
else{
    console.log(`your coupon is not valid , Your final bill is ${finalBill}`)
}


