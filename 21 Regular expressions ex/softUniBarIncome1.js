function softUniBarIncome1(input) {
    let totalIncome = 0;        
    for (let currLine of input) {
        let pattern = /[%](?<customerName>[A-Z][a-z]+)[%][^\|\$\%\.]*[<](?<productName>\w+)[>][^\|\$\%\.]*[|](?<productCount>\d+)[|]\D*((?<price>\d+\.?\d+)[$])/g;
        if ((exec = pattern.exec(currLine)) !== null) {
            let totalPrice = 0;
            let customer = exec.groups['customerName'];
            let product = exec.groups['productName'];
            let count = exec.groups['productCount'];
            let price = exec.groups['price'];
            totalPrice += Number(price) * Number(count);
            totalIncome += totalPrice;
            console.log(`${customer}: ${product} - ${totalPrice.toFixed(2)}`);
            //|', '$', '%' and '.'
        }
    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}
softUniBarIncome1(['%George%<Croissant>|2|10.3$',
'%Peter%<Gum>|1|1.3$',
'%Maria%<Cola>|1|2.4$',
'end of shift']



)