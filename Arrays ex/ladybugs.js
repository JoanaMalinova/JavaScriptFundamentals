function ladybugs(input) {
    let fieldLength = input.shift();
    let ladybugIndexes = input.shift();
    let indexesArr = ladybugIndexes.split(' ');
    let inputToString = input.join(' ');
    let commandArr = inputToString.split(' ');
    let cuurentIndex = 0;
    for (let i = 0; i < commandArr.length; i += 3) {
        if (commandArr[i] <= fieldLength - 1) {
            switch (commandArr[i + 1]) {
                case 'left':
                    cuurentIndex = indexesArr - commandArr[i + 1];
                    if (indexesArr[Number(cuurentIndex)] === 1) {

                    } else {
                        indexesArr[cuurentIndex]= 1

                    }
                    break;

                case 'right':
                    cuurentIndex = indexesArr + commandArr[i + 1];

            }
        }

    }
}
ladybugs([ 3, '0 1',
'0 right 1',
'2 right 1' ])
