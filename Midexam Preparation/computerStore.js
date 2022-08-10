function computerStore(array) {
    let totalSum = 0;
    let totalSumTaxed = 0;    
    let typeOfCustomer = array.pop();
    let priceArr = array.map(Number);
    for (const price of priceArr) {
        if(price < 0){
            console.log(`Invalid price!`);            
        }else{
            totalSum += price;
        }
    }
    if (totalSum === 0 ){
        console.log("Invalid order!");
    }else {
        let taxes = 0.2 * totalSum;
        totalSumTaxed = totalSum + totalSum * 0.2;
        switch(typeOfCustomer){           
            case 'special' : totalSumTaxed -= 0.1 * totalSumTaxed; break;            
        }
        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${totalSum.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log('-----------');
        console.log(`Total price: ${totalSumTaxed.toFixed(2)}$`)
    }    
}
computerStore(([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
    ])
    )