function substringMaking(phrase,startIndex, count) {
    let endIndex = startIndex + count;
    
    let result = phrase.substring(startIndex,endIndex);
    console.log(result);
}
substringMaking('ASentence', 1, 8)