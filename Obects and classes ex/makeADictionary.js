function makeADictionary2(input) {
    let mainArr = [];
    for (let entry of input) {
        let entryObj = JSON.parse(entry);
        mainArr.push(entryObj);
    }
    mainArr.sort((a, b) => {
        if (Object.keys(a)[0] !== Object.keys(b)[0]) {
            return Object.keys(a)[0].localeCompare(Object.keys(b)[0])
        } else if (mainArr.indexOf(a) < mainArr.indexOf(b)) {
            return a - b
        } else {
            return b - a
        }
    })
    for (let i = 0; i < mainArr.length; i++) {
        if(i === mainArr.length - 1){
            break;
        }
        let currLine = mainArr[i];        
        let nextLine = mainArr[i + 1];
        if(Object.keys(currLine)[0] === Object.keys(nextLine)[0]){
            currLine[Object.keys(currLine)[0]] = Object.values(nextLine)[0];            
            mainArr.splice(i + 1, 1);
        }
    }    
    for (let line of mainArr) {
        console.log(`Term: ${Object.keys(line)[0]} => Definition: ${Object.values(line)[0]}`)
    }
}
makeADictionary2([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]
)