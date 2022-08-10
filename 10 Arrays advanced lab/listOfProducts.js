function listOfProducts(list) {
    list.sort()
    let counter = 0;
    for (const element of list) {        
        counter ++;
        console.log(`${counter}.${element}`)
    }
}
listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])