function adAstra(input) {
    let totalCalories = 0;
    let result = [];
    let pattern = /([|#])(?<itemName>[A-Za-z\s]+)\1(?<expirationDate>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d+)\1/gm;
    while ((matches = pattern.exec(input[0])) !== null) {
        let currCalories = matches.groups['calories'];
        totalCalories += Number(currCalories);
        let currExpDate = matches.groups['expirationDate'];
        let currItem = matches.groups['itemName'];
        let currResult = `Item: ${currItem}, Best before: ${currExpDate}, Nutrition: ${currCalories}`
        result.push(currResult);
    }
    let daysToLast = Math.trunc(totalCalories / 2000);
    console.log(`You have food to last you for: ${daysToLast} days!`)
    result.forEach(element => {
        console.log(element);
    });
}
adAstra([
    'Hello|#Invalid food#19/03/20#450|$5*(@' ]
)