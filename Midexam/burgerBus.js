function burgerBus(mainArr) {
    let cityNum = Number(mainArr.shift());
    let totalProfit = 0;
    let currProfit = 0;
    for (let i = 1; i <= cityNum; i++) {
        let currCityArr = mainArr.splice(0, 3);
        let cityName = currCityArr[0]
        let earned = Number(currCityArr[1]);
        let expenses = Number(currCityArr[2]);
        if (i % 3 === 0 && i % 5 !== 0) {
            currProfit = earned - (expenses + 0.5 * expenses);
        } else if (i % 5 === 0) {
            currProfit = (earned - 0.1 * earned) - expenses;
        } else {
            currProfit = earned - expenses;
        }
        console.log(`In ${cityName} Burger Bus earned ${currProfit.toFixed(2)} leva.`);
        totalProfit += currProfit;
    }
    console.log(`Burger Bus total profit: ${totalProfit.toFixed(2)} leva.`);
}
burgerBus(['5',
    'Lillie',
    '2226.00',
    '1200.60',
    'Rennes',
    '6320.60',
    '5460.2',
    'Reims',
    '600.20',
    '452.32',
    'Bordeaux',
    '6925.30',
    '2650.40',
    'Montpellier',
    '680.50',
    '290.20'])