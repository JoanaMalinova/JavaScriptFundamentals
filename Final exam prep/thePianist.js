function thePianist(input) {
    let piecesCount = input.shift();
    let pieces = {};
    for (let i = 0; i < piecesCount; i++) {
        let currLine = input[i];
        let [piece, composer, key] = currLine.split('|');
        pieces[piece] = {
            composer,
            key
        };
    }
    input.splice(0, piecesCount);
    for (let command of input) {
        if (command === 'Stop') {
            break;
        }
        let commandArr = command.split("|");
        let piece = commandArr[1];
        if (commandArr.includes('Add')) {            
            let composer = commandArr[2];
            let key = commandArr[3];
            if (pieces.hasOwnProperty(piece)) {
                console.log(`${piece} is already in the collection!`)
            } else {
                pieces[piece] = {
                    composer,
                    key
                };
                console.log(`${piece} by ${composer} in ${key} added to the collection!`)
            }
        } else if (commandArr.includes('Remove')) {           
            if (pieces.hasOwnProperty(piece)) {
                delete pieces[piece];
                console.log(`Successfully removed ${piece}!`)
            }else{
                console.log(`Invalid operation! ${piece} does not exist in the collection.`)
            }
        } else if (commandArr.includes('ChangeKey')) {           
            let newKey = commandArr[2];
            if (pieces.hasOwnProperty(piece)) {
                pieces[piece].key = newKey;
                console.log(`Changed the key of ${piece} to ${newKey}!`)
            }else{
                console.log(`Invalid operation! ${piece} does not exist in the collection.`)
            }
        } 
    }
    let piecesEntries = Object.entries(pieces);
    for (let [pieceName, pieceObj] of piecesEntries) {
       console.log(`${pieceName} -> Composer: ${pieceObj.composer}, Key: ${pieceObj.key}`)
    }
}
thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]
)