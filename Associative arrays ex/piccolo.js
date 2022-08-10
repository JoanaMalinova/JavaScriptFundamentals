function piccolo(input) {
    let parkingLot = new Set();
    for (let line of input) {
        let [command, carNumber] = line.split(', ')
        switch (command) {
            case 'IN':
                parkingLot.add(carNumber);
                break;
            case 'OUT':
                parkingLot.delete(carNumber);
                break;
        }
    }
    let sortedParking = Array.from(parkingLot.values()).sort();
    if(parkingLot.size === 0){
        console.log('Parking Lot is Empty')
    }else{
        console.log(sortedParking.join(`\n`));
    }
}
piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']


)