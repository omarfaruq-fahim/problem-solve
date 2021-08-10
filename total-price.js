const productPrice = [
    {name: 'laptop', price: 43000, quantity: 1},
    {name: 'shirt', price: 500, quantity: 8},
    {name: 'watch', price: 3680, quantity: 3},
    {name: 'phone', price: 55000, quantity: 1}
];
function totalSales(productPrice){
    let priceTotal = 0;
    for(const product of productPrice){
        console.log(product);
        const productTotal = product.price * product.quantity;
        priceTotal = priceTotal + productTotal
        return productTotal;
    }
    
    console.log(priceTotal);
}

