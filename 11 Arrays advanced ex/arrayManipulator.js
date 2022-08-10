function arrayManipulator(numArray, commandArray) {
    for (let element of commandArray) {
        let command = element.split(' ');
        let commAct = command.shift();
        command = command.map(Number);
        switch (commAct) {
            case 'add':
                let index = command[0];
                let element = command[1];
                numArray.splice(index, 0, element);
                break;
            case 'addMany':
                let index1 = command[0]
                numArray.splice(index1, ...command);
                break;
            case 'contains':
                console.log(numArray.indexOf(command[0]));
                break;
            case 'remove':
                numArray.splice(command[0], 1);
                break;
            case 'shift':
                let times = command[0];
                for (let i = 0; i < times; i++) {
                    let rotateNum = numArray.shift();
                    numArray.push(rotateNum);
                }
                break;
            case 'sumPairs':
                let newArray = [];
                for (let i = 0; i < numArray.length; i += 2) {
                    if (i === numArray.length - 1) {
                        newArray.push(numArray[i]);
                    } else {
                        let newElement = numArray[i] + numArray[i + 1];
                        newArray.push(newElement);
                    }
                }
                numArray.splice(0, numArray.length, ...newArray);
                break;

            case 'print':
                console.log(`[ ${numArray.join(', ')} ]`)
                break;

        }
    }
}
arrayManipulator([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 2],
    ["sumPairs", "sumPairs", 'print']

)