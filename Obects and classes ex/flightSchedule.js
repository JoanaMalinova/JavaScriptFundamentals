function flightSchedule(input) {
    let flightObj = {};
    let schedule = input.shift();
    let changesToSchedule = input.shift();
    let needed = input.toString();
    for (let currFlight of schedule) {
        flightObj[currFlight] = 'Ready to fly'
    }
    for (let cancelled of changesToSchedule) {
        let cancelledArr = cancelled.split(' ');
        for (let key in flightObj) {
            let flightNum = key.split(' ')[0];
            if (cancelledArr[0] === flightNum) {
                flightObj[key] = 'Cancelled'
            }
        }
    }
    for (let key in flightObj) {
        if (flightObj[key] === needed) {
            let split = key.split(' ');
            split.shift();
            let res = split.join(' ');
            console.log(`{ Destination: '${res}', Status: '${needed}' }`)
        }
    }
}
flightSchedule([['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK430 Cancelled'],
 ['Ready to fly']
]
)