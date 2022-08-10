function travelTime(input) {
    let main = {};
    for (let currLine of input) {
        let [country, town, price] = currLine.split(' > ');
        if (main.hasOwnProperty(country)) {
            if (main[country][town]) {
                lastPrice = Number((main[country][town]));
                currPrice = Number(price);
                if (currPrice < lastPrice) {
                    main[country][town] = currPrice;
                }
            } else {
                main[country][town] = Number(price);
            }
        } else {
            main[country] = { [town]: Number(price) };
        }
    }
    let entries = Object.entries(main).sort((a, b) => a[0].localeCompare(b[0]));
    for (let [key, value] of entries) {
        let toBePrinted = '';
        let result = Object.entries(value).sort((a, b) => a[1] - b[1]);
        for (current of result) {
            let resToString = current.join(' -> ');
            toBePrinted += resToString + ' ';
        }
        console.log(`${key} -> ${toBePrinted}`);
    }


}
travelTime([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10'
]

)