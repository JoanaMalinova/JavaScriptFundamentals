function airPollution(sofiaMatrix, conditionArr) {
    let workMatrix = sofiaMatrix.map(x => x.split(' '));
    let airIsPoluted = false;
    for (let i = 0; i < conditionArr.length; i++) {
        let currentCon = conditionArr[i].split(' ');
        switch (currentCon[0]) {
            case 'breeze':
                let row = Number(currentCon[1]);
                workMatrix[row] = workMatrix[row].map(arg = (x) => {
                    if (x - 15 > 0) {
                        return x - 15;
                    } else {
                        return 0;
                    }
                })
                break;
            case 'gale':
                let column = Number(currentCon[1]);
                for (let j = 0; j < 5; j++) {
                    let currentRow = workMatrix[j];
                    if (currentRow[column] - 20 > 0) {
                        currentRow[column] -= 20;
                    } else {
                        currentRow[column] = 0;
                    }
                }
                break;
            case 'smog':
                let increaseValue = Number(currentCon[1]);
                for (let k = 0; k < 5; k++) {
                    workMatrix[k] = workMatrix[k].map(x => Number(x) + increaseValue);
                }
                break;
        }
    }
    let polutedArr = [];
    for (let l = 0; l < 5; l++) {
        let currentRow = workMatrix[l];
        for (let m = 0; m < 5; m++) {
            let currentEl = currentRow[m];
            if (currentEl >= 50) {
                airIsPoluted = true;
                polutedArr.push(`[${l}-${m}]`)
            }
        }
    }
    if (airIsPoluted) {
        console.log(`Polluted areas: ${polutedArr.join(', ')}`);
    } else {
        console.log("No polluted areas");
    }
}
airPollution(['5 7 72 14 4',
    '41 35 37 27 33',
    '23 16 27 42 12',
    '2 20 28 39 14',
    '16 34 31 10 24'],
    ['breeze 1', 'gale 2', 'smog 25']
)