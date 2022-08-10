function rightPlace(firstWord,letter,secondWord){
    let word = firstWord.replace("_",letter);
    let output = word === secondWord? "Matched": "Not Matched";
    console.log(output)
}
rightPlace('Str_ng', 'i', 'String')