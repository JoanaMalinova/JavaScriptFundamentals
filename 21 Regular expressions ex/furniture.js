function furniture(input) {
    let furnitureArr = [];
    let totalMoneySpend = 0;
    for (let currLine of input) {
        if(currLine === 'Purchase'){
            break;
        }
        let pattern = /(?<item>[A-Z]\w+)<<(?<price>\d+.?\d+)\!(?<quantity>\d+)/g;
        if((matches = pattern.exec(currLine)) !== null){
            let furnitureName  = matches.groups['item'];
            let furniturePrice = matches.groups['price'];
            let furnitureQuantity = matches.groups['quantity'];
            let priceTotal = furniturePrice * furnitureQuantity;
            totalMoneySpend += priceTotal;
            furnitureArr.push(furnitureName)
        }       
    }
    console.log('Bought furniture:');
    furnitureArr.forEach(element => {
        console.log(element);        
    });
    console.log(`Total money spend: ${totalMoneySpend.toFixed(2)}`);
}
furniture(['>Invalid<<!4',
'>Invalid<<!2',
'>Invalid<<!5',
'Purchase']


)