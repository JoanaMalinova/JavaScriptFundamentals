function revealWords(words, sentence) {
     let wordsArr = [];
     if(words.includes(',')){
       wordsArr.push(...words.split(', '));
     }else {
        wordsArr.push(words);
     }
     for (let word of wordsArr) {
        let template = '*'.repeat(word.length);
        if(sentence.includes(template)){
            sentence = sentence.replace(template, word)
        }
     }
     console.log(sentence);
}
revealWords('great',
'softuni is ***** place for learning new programming languages'
)