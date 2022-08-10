function censoredWords(sentence, wordToBecensored) {
    let censor = '*'.repeat(wordToBecensored.length);    
    let result = sentence;
    while(result.includes(wordToBecensored)){
        result = result.replace(wordToBecensored, censor);
    }    
    console.log(result);
}
censoredWords('Find the hidden word hidden', 'hidden')