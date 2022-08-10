function matchFullNames(input) {
    let regEx = /\b([A-Z][a-z]+)[ ]([A-Z][a-z]+)\b/g;    
    let matches = input.match(regEx);
    if(matches){
        console.log(matches.join(' '));
    }    
}
matchFullNames('Ivan Ivanov, Iv Ivanov, ivan Ivanov, Ivan Iv, Test Testov, Ivan	Ivanov')