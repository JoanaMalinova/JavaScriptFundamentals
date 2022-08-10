function pirates(input) {
    let settlements = {};
    for (let settlement of input) {
        if (settlement === 'Sail') {
            break;
        }
        let [town, people, gold] = settlement.split('||');
        if (settlements[town]) {
            settlements[town].population += Number(people);
            settlements[town].riches += Number(gold);
        } else {
            settlements[town] = {
                population: Number(people),
                riches: Number(gold)
            };
        }
    }
    for (let command of input) {
        if (command === 'End') {
            break;
        }
        let commandArr = command.split('=>');
        let town = commandArr[1];
        switch (commandArr[0]) {
            case 'Plunder':
                let killed = Number(commandArr[2]);
                let stolenRiches = Number(commandArr[3]);
                console.log(`${town} plundered! ${stolenRiches} gold stolen, ${killed} citizens killed.`);
                if (settlements[town].population - killed === 0 || settlements[town].riches - stolenRiches === 0) {
                    delete settlements[town];
                    console.log(`${town} has been wiped off the map!`)
                }else{
                    settlements[town].population -= killed;
                    settlements[town].riches -= stolenRiches;
                }
                break;
            case 'Prosper':
                let goldGained = Number(commandArr[2]);
                if (goldGained < 0) {
                    console.log("Gold added cannot be a negative number!")
                    continue;
                } else {
                    settlements[town].riches += goldGained;
                    console.log(`${goldGained} gold added to the city treasury. ${town} now has ${settlements[town].riches} gold.`)
                }
                break;
        }
    }
    let settlementsKeys = Object.keys(settlements);
    if (settlementsKeys.length >= 1) {
        console.log(`Ahoy, Captain! There are ${settlementsKeys.length} wealthy settlements to go to:`);
        for (let settlement of settlementsKeys) {
            console.log(`${settlement} -> Population: ${settlements[settlement].population} citizens, Gold: ${settlements[settlement].riches} kg`)
        }
    } else {
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
    }
}
pirates(["Nassau||95000||1000",
"San Juan||930000||1250",
"Campeche||270000||690",
"Port Royal||320000||1000",
"Port Royal||100000||2000",
"Sail",
"Prosper=>Port Royal=>-200",
"Plunder=>Nassau=>94000=>750",
"Plunder=>Nassau=>1000=>150",
"Plunder=>Campeche=>150000=>690",
"End"])


