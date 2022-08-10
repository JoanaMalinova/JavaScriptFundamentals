function countStringOccurrences(sentence, word) {
    let splited = sentence.split(' ');
    let counter = 0 ;
    for (let currWord of splited) {
        if(currWord === word){
            counter ++;
        }
    }
    console.log(counter);
}
countStringOccurrences('softuni is great place for learning new programming languages',
'softuni'

)