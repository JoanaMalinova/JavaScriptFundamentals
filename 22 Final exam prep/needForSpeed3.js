function needForSpeed3(input) {
    let carCount = input.shift();
    let cars = {};
    for (let i = 0; i < carCount; i++) {
        let currCarInfo = input[i];
        let [carModel, mileage, fuel] = currCarInfo.split('|');
        cars[carModel] = {
            mileage: Number(mileage),
            fuel: Number(fuel)
        };
    }
    input.splice(0, carCount);
    for (let command of input) {
        if (command === 'Stop') {
            break;
        }
        let commandArr = command.split(' : ');
        let car = commandArr[1];
        if (commandArr.includes('Drive')) {
            let distance = Number(commandArr[2]);
            let neededFuel = Number(commandArr[3]);
            if (cars[car].fuel < neededFuel) {
                console.log('Not enough fuel to make that ride');
            } else {
                cars[car].fuel = cars[car].fuel - neededFuel;
                cars[car].mileage = cars[car].mileage + distance;
                console.log(`${car} driven for ${distance} kilometers. ${neededFuel} liters of fuel consumed.`)
                if (cars[car].mileage >= 100000) {
                    delete cars[car];
                    console.log(`Time to sell the ${car}!`)
                }
            }
        } else if (commandArr.includes('Refuel')) {
            let fuelToAdd = Number(commandArr[2]);
            if (cars[car].fuel + fuelToAdd > 75) {
                fuelToAdd = 75 - cars[car].fuel;
                cars[car].fuel = 75;
            } else {
                cars[car].fuel = cars[car].fuel + fuelToAdd;
            }
            console.log(`${car} refueled with ${fuelToAdd} liters`)

        } else {
            let kmToSetBack = Number(commandArr[2]);
            if (cars[car].mileage - kmToSetBack < 10000) {
                kmToSetBack = cars[car].mileage - 10000;
                cars[car].mileage = 10000;
            } else {
                cars[car].mileage = cars[car].mileage - kmToSetBack;
                console.log(`${car} mileage decreased by ${kmToSetBack} kilometers`)
            }

        }

    }
    let carEntries = Object.entries(cars);
    for (let [car, carInfo] of carEntries) {
        console.log(`${car} -> Mileage: ${carInfo.mileage} kms, Fuel in the tank: ${carInfo.fuel} lt.`)
    }    
}
needForSpeed3([
    '1',
    'Audi A6|38000|62',   
    'Drive : Audi A6 : 543 : 47',  
    'Refuel : Audi A6 : 50',    
    'Revert : Audi A6 : 30000',
    'Stop'
]

  
)