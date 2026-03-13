let totalPrice = 75; 
 
if (totalPrice >=100) {
    let discountedPrice = (totalPrice * 0.7); 
    console.log(discountedPrice);
}   else {
    let amountNeeded = (100 - totalPrice);
    console.log(`Utrať ještě ${amountNeeded} a získáš 30% slevu!`);
}  