function garage(input) {
    let carGarage = {};
    for (let currentCarInfo of input) {
        let [garageNum, carDescription] = currentCarInfo.split(' - ');
        let carDescrArr = carDescription.split(', ');
        if (!carGarage.hasOwnProperty(garageNum)) {
            carGarage[garageNum] = [];
        }
        let toBePushed = {};
        carDescrArr.forEach(element => {
            toBePushed[element.split(': ')[0]] = element.split(': ')[1];
        });
        carGarage[garageNum].push(toBePushed);
    }
    let entries = Object.entries(carGarage);
    for (let [key, value] of entries) {
        console.log(`Garage № ${key}`);
        value.forEach((a) => {
            toBeprinted = '--- ';
            for (let j = 0; j < Object.entries(a).length; j++) {
                let currEntry = Object.entries(a)[j];               
                for (let k = 0; k < currEntry.length; k += 2) {
                    let currKey = currEntry[0];
                    let currValue = currEntry[1];
                    if (j === Object.entries(a).length - 1) {
                        toBeprinted += currKey + ' - ' + currValue;
                    } else {
                        toBeprinted += currKey + ' - ' + currValue + ', ';
                    }
                }               
            }
            console.log(toBeprinted);            
        })
    }
}
garage(['1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'])