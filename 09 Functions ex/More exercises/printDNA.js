function printDNA(length) {
    let dnaArray = [];
    dnaArray.push('A', 'T', 'C', 'G', 'T', 'T', 'A', 'G', 'G', 'G');

    let printFirstPartOfHelix = (x, y) => {
        console.log(`**${x}${y}**`);
    }
    let printSecondPartOfHelix = (x, y) => {
        console.log(`*${x}--${y}*`);
    }
    let printThirdPartOfHelix = (x, y) => {
        console.log(`${x}----${y}`);
    }
    for (let i = 0, j = 0; i < length; i++, j += 2) {
        if (j === 10) {
            j = 0;
        }
        if (i === 0 || i % 4 === 0) {
            printFirstPartOfHelix(dnaArray[j], dnaArray[j + 1]);
        } else if (i % 2 !== 0) {
            printSecondPartOfHelix(dnaArray[j], dnaArray[j + 1]);
        } else {
            printThirdPartOfHelix(dnaArray[j], dnaArray[j + 1]);
        }
    }
}
printDNA(4)
printDNA(10)