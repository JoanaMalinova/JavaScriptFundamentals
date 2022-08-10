function destinationMapper(input) {
    let pattern = /([=\/])(?<destination>[A-Z][A-Z|a-z]{2,})\1/g;
    let travelPoints = 0;
    let destinationArr = [];
    while ((matches = pattern.exec(input)) !== null) {
        let destinationName = matches.groups['destination'];
        travelPoints += destinationName.length;
        destinationArr.push(destinationName);
    }
    console.log(`Destinations: ${destinationArr.join(', ')}`);
    console.log(`Travel Points: ${travelPoints}`);

}
destinationMapper("ThisIs some InvalidInput")