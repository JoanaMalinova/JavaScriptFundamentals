function storeProvision(currentStock, orderedStock) {
    let stockObj = {};    
    for (let j = 0; j < orderedStock.length; j += 2) {
        if (currentStock.includes(orderedStock[j])) {
            let index = currentStock.indexOf(orderedStock[j]);
            currentStock.splice(index + 1, 1, Number(currentStock[index + 1]) + Number(orderedStock[j + 1]));
        } else {
            currentStock.push(orderedStock[j], Number(orderedStock[j + 1]));
        }
    }
    for (let i = 0; i < currentStock.length; i += 2) {
       stockObj.product = currentStock[i];
       stockObj.quantity = currentStock[i + 1]; 
       console.log(`${stockObj.product} -> ${stockObj.quantity}`);       
    }   
}


storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
)