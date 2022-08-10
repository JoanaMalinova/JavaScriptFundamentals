function orders(product,quantity){
    let totalSum = 0;
    switch(product){
        case 'water': totalSum = 1 * quantity; break;
        case 'coffee': totalSum = 1.5 * quantity; break;
        case'coke' : totalSum = 1.4 * quantity; break;
        case 'snacks': totalSum = 2 * quantity; break;
    }
    return totalSum.toFixed(2);

}