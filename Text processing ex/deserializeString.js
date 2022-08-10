function deserializeString(input) {
    input.pop();
    let indexesArr = [];
    for (let currLine of input) {
        let indexes = currLine.split(':')[1];
        indexesArr.push(...indexes.split('/')); 
    }
    indexesArr.sort((a,b) => a - b);
    let wordLength = Number(indexesArr.pop());
    let word = '*'.repeat(wordLength);
    let wordArr = word.split('');
    for (let currLine of input) {
        let indexes = currLine.split(':')[1];
        let currChar = currLine[0];
        let indexesSplit = indexes.split('/');
        for (let currIndex of indexesSplit) {
            currIndex = Number(currIndex);
            wordArr.splice(currIndex, 1 ,currChar );            
        }
        
    }
    console.log(wordArr.join(''));
}
deserializeString(['a:0/2/4/6',
'b:1/3/5',
'end']

)