function plantDiscovery(input) {
    let infoLineNum = input.shift();
    let plants = {};
    for (let i = 0; i < infoLineNum; i++) {
        let currLine = input[i];
        let [plantName, rarity] = currLine.split('<->');
        plants[plantName] = { rarity: Number(rarity) };
        plants[plantName].rating = [];
    }
    for (let j = 0; j < infoLineNum; j++) {
        input.shift()
    }
    for (let currCommand of input) {
        if (currCommand === 'Exhibition') {
            break;
        }
        let currCommandArr = currCommand.split(': ');
        let plantInfoArr = currCommandArr[1].split(' - ');
        let plant = plantInfoArr[0];
        if (!plants.hasOwnProperty(plant)) {
            console.log('error');
            continue;
        }
        let plantData = Number(plantInfoArr[1]);
        if (currCommandArr.includes('Rate')) {
            plants[plant].rating.push(plantData);
        } else if (currCommandArr.includes('Update')) {
            plants[plant].rarity = plantData;
        } else {
            plants[plant].rating = [];
        }
    }
    console.log('Plants for the exhibition:')
    plantEntries = Object.entries(plants);
    for (let [plantName, plantInfo] of plantEntries) {
        let infoValues = Object.values(plantInfo);
        let average = 0;
        if (infoValues[1][0]) {
            let totalRating = infoValues[1].reduce((a, b) => {
                return a + b;
            }, 0)
            average = totalRating / infoValues[1].length;
        }
        console.log(`- ${plantName}; Rarity: ${infoValues[0]}; Rating: ${average.toFixed(2)}`);
    }
}
plantDiscovery(["2",
"Candelabra<->10",
"Oahu<->10",
"Rate: Oahu - 7",
"Rate: Candelabra - 6",
"Exhibition"]
)
