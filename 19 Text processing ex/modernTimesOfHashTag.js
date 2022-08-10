function modernTimesOfHashTag(sentence) {
    let splited = sentence.split(' ');
    let resultArr = [];
    for (let word of splited) {
        let isNotALetter = false;
        if(word.startsWith('#') && word.length > 1){
            let result = word.replace('#','');
            for (let letter of result) {
                let letterAscii = letter.charCodeAt(0);
                if((letterAscii >= 65 && letterAscii <= 90) ||
                 (letterAscii >= 97 && letterAscii)){
    
                 }else{
                    isNotALetter = true;
                    break;
                 }
                 
            }
            if(isNotALetter){
                continue;
            }else{
                resultArr.push(result);
            }
        }
        
    }
    resultArr.forEach(element => {console.log(element)
        
    });

}
modernTimesOfHashTag('The symbol # is known #variously in English-speaking #regions as the #number sign')