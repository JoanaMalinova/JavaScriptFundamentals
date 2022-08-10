function reverseString(word){
    let println= '';
    for (let i = word.length; i >= 0; i--) {
        let letter = word.charAt(i);
        println += letter;
        
    }
    console.log(println)
}
reverseString('Hello')