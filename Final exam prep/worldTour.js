function worldTour(input) {
    let stops = input.shift();
    for (let currLine of input) {
        if (currLine === 'Travel') {
            break;
        }
        let array = currLine.split(':');
        if (currLine.includes('Add Stop')) {
            let addIndex = Number(array[1]);
            let stopToAdd = array.pop();
            if (addIndex >= 0 && addIndex <= stops.length - 1) {
                let firstPart = stops.substring(0, addIndex);
                let secondPart = stops.substring(addIndex, stops.length);
                stops = firstPart + stopToAdd + secondPart;                
            }
            console.log(stops);
        } else if (currLine.includes('Remove Stop')) {
            let startIndex = Number(array[1]);
            let endIndex = Number(array.pop());
            if (startIndex >= 0 && startIndex <= stops.length - 1 &&
                endIndex >= 0 && endIndex <= stops.length - 1 ) {
                let firstPart = stops.substring(0, startIndex);
                let secondPart = stops.substring(endIndex + 1, stops.length);
                stops = firstPart + secondPart;                
            }
            console.log(stops);
        } else {
            let oldString = array[1];
            let newString = array.pop();
            if(stops.includes(oldString)){
                stops = stops.replace(oldString, newString);                
            }
            console.log(stops);
        }
    }
    console.log(`Ready for world tour! Planned stops: ${stops}`)
}
worldTour(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria"
])
