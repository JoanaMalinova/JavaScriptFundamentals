function race(input) {
    let names = input.shift();
    let racers = {};
    for (let currLine of input) {
        if (currLine === 'end of race') {
            break;
        }
        let namePattern = /[A-Za-z]/g;
        let distancePattern = /\d/g;
        let matchesOfLetters = currLine.match(namePattern);
        let matchesOfNumbers = currLine.match(distancePattern);
        let name = matchesOfLetters.join('');
        let distance = 0;
        matchesOfNumbers.forEach(currNum => {
            distance += Number(currNum);
        });
        if (names.includes(name)) {
            if (racers.hasOwnProperty(name)) {
                racers[name] = racers[name] + distance;
            } else {
                racers[name] = distance;
            }
        }
    }
    let entries = Object.entries(racers);
    let sortedByDistance = entries.sort((a,b) =>{
        return b[1] - a[1];
    })
    let first = sortedByDistance[0];
    let second = sortedByDistance[1];
    let third = sortedByDistance[2];
    console.log(`1st place: ${first[0]}`)
    console.log(`2nd place: ${second[0]}`)
    console.log(`3rd place: ${third[0]}`)
}
race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
'Mi*&^%$ch123o!#$%#nne787) ',
'%$$B(*&&)i89ll)*&) ',
'R**(on%^&ald992) ',
'T(*^^%immy77) ',
'Ma10**$#g0g0g0i0e',
'end of race']

)