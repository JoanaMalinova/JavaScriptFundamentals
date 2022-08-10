function stringSubstring(word, text) {
    let wordToLowerCase = word.toLowerCase(); 
    let textToLowerCase = text.toLowerCase();
    let textArr = textToLowerCase.split(' ');    
    if(textArr.includes(wordToLowerCase)){
        console.log(word)
    }else{
        console.log(`${word} not found!`)
    }
}
stringSubstring('javascript',
'JavaScript is the best programming language'

)